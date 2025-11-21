"use client";

import { motion } from "framer-motion";
import { SiAmazon, SiShopee, SiMercadopago } from "react-icons/si";
import { FaShoppingCart, FaRocket } from "react-icons/fa";

const platforms = [
  {
    name: "Mercado Livre",
    icon: SiMercadopago,
    description: "Alcance milhões de compradores na América Latina",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "from-yellow-400/10 to-yellow-600/10",
  },
  {
    name: "Shopee",
    icon: SiShopee,
    description: "Marketplace em crescimento explosivo no Brasil",
    color: "from-orange-600 to-red-600",
    bgColor: "from-orange-600/10 to-red-600/10",
  },
];

export default function Marketplaces() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-600/20 border border-orange-400/30 backdrop-blur-xl mb-6"
          >
            <FaShoppingCart className="text-orange-400 text-xl" />
            <span className="text-gray-200 font-semibold text-sm md:text-base">Plataformas Integradas</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 bg-clip-text text-transparent">
            Venda nos Principais Marketplaces
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-normal leading-relaxed">
            Todo <strong className="text-yellow-300 font-semibold">material necessário</strong> para você <strong className="text-yellow-400 font-bold">começar a vender</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="relative group h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Premium Glass Card - Estilo igual ao card Loja Virtual */}
                <div className="relative h-full rounded-[2.5rem] overflow-hidden min-h-[280px]">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${platform.bgColor}`}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%" }}
                  />
                  
                  {/* Glassmorphism layer */}
                  <div className="absolute inset-0 backdrop-blur-2xl" />
                  
                  {/* Border */}
                  <div className="absolute inset-0 rounded-[2.5rem] border-2 border-yellow-400/40 group-hover:border-yellow-400/60 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center justify-center gap-6 h-full">
                    <motion.div
                      className="flex-shrink-0"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-2xl`}>
                        <platform.icon className="text-4xl text-white" />
                      </div>
                    </motion.div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3">
                        {platform.name}
                      </h3>
                      <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto relative group">
            {/* Premium CTA Card */}
            <div className="relative rounded-[2.5rem] overflow-hidden">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 via-amber-600/20 to-orange-600/20"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              />
              
              {/* Glassmorphism layer */}
              <div className="absolute inset-0 backdrop-blur-2xl" />
              
              {/* Border */}
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-yellow-400/40 group-hover:border-yellow-400/60 transition-all duration-500" />
              
              {/* Content */}
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-6">
                <motion.div
                  className="flex-shrink-0"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-700 flex items-center justify-center shadow-2xl">
                    <FaRocket className="text-4xl text-slate-900" />
                  </div>
                </motion.div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-3">
                    Loja Virtual + Marketplaces
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    Aprenda a criar sua <strong className="text-yellow-300 font-semibold">própria loja virtual</strong> e vender <strong className="text-yellow-400 font-bold">simultaneamente</strong> nos principais marketplaces do Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
