import { Web3Button } from "@web3modal/react";
import { useAccount, useBalance } from "wagmi";

export default function Home() {
  const { address, isConnected } = useAccount();

  return (
    <main className="min-h-screen bg-black text-white p-4">
      <div className="max-w-2xl mx-auto pt-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-green-400 mb-6">
          链上3D预测大师
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          每日20:30 100%同步中国福利彩票3D官方号码<br />
          纯预测娱乐 · 非赌博 · 0.3 USDT一注
        </p>

        <div className="bg-gray-900 rounded-2xl p-8 border-4 border-green-500">
          {isConnected ? (
            <div>
              <p className="text-3xl mb-6">欢迎预测官方3D</p>
              <w3m-button size="lg" label="已连接钱包" />
              <p className="text-yellow-400 mt-8 text-xl">
                充值USDT后即可预测 · 0手续费
              </p>
            </div>
          ) : (
            <div>
              <w3m-button size="lg" label="连接钱包开始预测" />
            </div>
          )}
        </div>

        <div className="mt-12 text-gray-400">
          <p className="text-sm">
            本项目仅提供官方3D号码预测娱乐服务 · 号码100%来自福彩官网 · 可自行核对
          </p>
        </div>
      </div>
    </main>
  );
}
