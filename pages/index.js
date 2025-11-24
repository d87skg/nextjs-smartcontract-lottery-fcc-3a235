import { Web3Button } from "@web3modal/react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto text-center pt-16">
        <h1 className="text-5xl md:text-7xl font-bold text-green-400 mb-6">
          链上3D预测大师
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
          每日20:30 100%同步中国福利彩票3D官方号码<br />
          纯预测娱乐 · 非赌博 · 0.3 USDT一注
        </p>

        <div className="bg-gray-900 rounded-3xl p-10 border-4 border-green-500 shadow-2xl">
          <p className="text-4xl mb-8 text-yellow-400">欢迎预测官方3D</p>
          <Web3Button />
          <p className="text-red-400 mt-8 text-2xl font-bold">
            充值USDT后即可预测 · 0手续费 · 3秒到账
          </p>
        </div>

        <div className="mt-16 text-gray-500 text-sm">
          <p>本项目仅提供官方3D号码预测娱乐服务 · 号码100%来自福彩官网 · 可自行核对</p>
          <p className="mt-2">合约地址：0xab23a5cd2961cccd2e74c92b5128006c52a4c211（Base链）</p>
        </div>
      </div>
    </main>
  );
}
