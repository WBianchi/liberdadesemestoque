"use client";

import { motion } from "framer-motion";
import { SiAmazon, SiShopee, SiMercadopago } from "react-icons/si";
import { FaStore } from "react-icons/fa";

const integrations = [
  { icon: SiMercadopago, name: "Mercado Livre", color: "text-yellow-400" },
  { icon: SiShopee, name: "Shopee", color: "text-orange-600" },
  { icon: FaStore, name: "Sua Loja", color: "text-blue-400" },
];

export default function IntegrationsBanner() {
  return (
    <section className="py-12 md:py-16 px-4 relative overflow-hidden bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-500">
      {/* Background patterns pretos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.3) 35px, rgba(0,0,0,.3) 70px)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(0,0,0,.2) 35px, rgba(0,0,0,.2) 70px)' }} />
      </div>
      
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Badge melhorada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/20 backdrop-blur-xl mb-4 shadow-lg"
          >
            <span className="text-slate-900 font-bold text-sm md:text-base">Integrado com</span>
          </motion.div>
          
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 drop-shadow-sm">
            Principais Marketplaces
          </h3>
        </motion.div>

        {/* Logos animados */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="flex flex-col items-center gap-2"
            >
              <div className="relative group">
                {/* Glow effect amarelo */}
                <div className="absolute inset-0 bg-yellow-300/40 opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-300" />
                
                {/* Icon Card Dark */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl border-2 border-slate-700 flex items-center justify-center group-hover:border-yellow-500 group-hover:scale-110 transition-all duration-300 shadow-2xl">
                  <integration.icon className="text-5xl md:text-6xl text-yellow-400 drop-shadow-2xl" />
                </div>
              </div>
              
              {/* Name */}
              <span className="text-slate-900 text-sm md:text-base font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Linha decorativa animada preta */}
        <motion.div
          className="mt-10 h-1 bg-gradient-to-r from-transparent via-black/40 to-transparent rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
  );
}
