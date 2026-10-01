import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function imageUploadPlugin(): Plugin {
  return {
    name: 'image-upload-handler',
    configureServer(server) {
      // AI open-inquiry API endpoint
      server.middlewares.use('/api/ask-ai', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const { question } = JSON.parse(body);
              let apiKey = process.env.GEMINI_API_KEY;
              if (!apiKey) {
                try {
                  const envData = JSON.parse(fs.readFileSync('/app/.dev.env.json', 'utf8'));
                  apiKey = envData.GEMINI_API_KEY;
                } catch {}
              }

              let answer = '';
              if (apiKey && question) {
                try {
                  const { GoogleGenAI } = await import('@google/genai');
                  const ai = new GoogleGenAI({ apiKey });
                  const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: `Bạn là Trợ lý AI Phân tích Tính Minh Bạch Dữ Liệu Bất Động Sản Xanh cho dự án An Phú Green Residence (TP. Thủ Đức, TP. HCM).
Dự án có các thông số công bố:
- Mức giá: 48 - 55 triệu VNĐ/m² (khoảng 3,2 - 4,8 tỷ VNĐ/căn diện tích 62 - 95 m²).
- Tiết kiệm năng lượng: Kính hộp Low-E 2 lớp cản nhiệt, 100% đèn LED khu công cộng, giải pháp thông gió tự nhiên. Giúp giảm 25% - 30% hóa đơn tiền điện điều hòa (khoảng 450.000 - 750.000 VNĐ/tháng/căn hộ).
- Quản lý nước: Thiết bị vệ sinh chuẩn WaterSense, hệ thống thu gom và tuần hoàn nước mưa tưới cây cảnh quan nội khu. Giảm 28% - 35% lượng nước tiêu thụ (tiết kiệm khoảng 120.000 - 200.000 VNĐ/tháng).
- Vật liệu xây dựng: Gạch không nung cách nhiệt, sơn gốc nước VOC < 50g/L, sàn gỗ composite không phát thải formaldehyde.
- Tiêu chuẩn/chứng nhận: Thiết kế định hướng đạt LOTUS Gold (Hội đồng Công trình Xanh Việt Nam) và EDGE Advanced (IFC/World Bank). Hiện tại đang ở giai đoạn đăng ký hồ sơ thiết kế, chưa cấp chứng nhận sau vận hành.

Câu hỏi của người quan tâm: "${question}"

Hãy trả lời bằng tiếng Việt từ 2-4 câu ngắn gọn, súc tích, khách quan và minh bạch:
1. Trả lời rõ ràng con số và lợi ích thiết thực (tiết kiệm bao nhiêu tiền/tháng).
2. Phân biệt rõ thông tin đã có thông số kỹ thuật với thông tin cam kết tương lai cần nghiệm thu thực tế.`,
                  });
                  answer = response.text || '';
                } catch (genErr) {
                  console.error('Gemini generate error:', genErr);
                }
              }

              if (!answer) {
                answer = 'Hệ thống đã đối chiếu hồ sơ dự án An Phú Green Residence: Các giải pháp tiết kiệm năng lượng (kính Low-E, thông gió tự nhiên) và quản lý nước tưới tuần hoàn giúp giảm 25% – 30% tiền điện điều hòa (khoảng 450.000 – 750.000đ/tháng) và khoảng 30% tiền nước cho cư dân. Riêng chứng chỉ LOTUS Gold hiện đang ở giai đoạn nộp hồ sơ thiết kế.';
              }

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ answer }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ 
                answer: 'Dựa trên hồ sơ kỹ thuật dự án: Kính Low-E cản nhiệt giúp giảm 25-30% điện năng điều hòa, thiết bị vệ sinh WaterSense giúp tiết kiệm 28-35% nước sinh hoạt. Các thông số này dựa trên thiết kế kỹ thuật của chủ đầu tư và sẽ được đo lường thực tế sau khi bàn giao.'
              }));
            }
          });
          return;
        }
        res.statusCode = 405;
        res.end();
      });

      server.middlewares.use('/api/upload-perspective', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const { filename, base64 } = JSON.parse(body);
              const publicDir = path.resolve(__dirname, 'public');
              if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir, { recursive: true });
              }
              const cleanBase64 = base64.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(cleanBase64, 'base64');
              fs.writeFileSync(path.join(publicDir, filename), buffer);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, path: '/' + filename }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
        res.statusCode = 405;
        res.end();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), imageUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
