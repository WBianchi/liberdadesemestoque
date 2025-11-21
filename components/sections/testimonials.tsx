"use client";

import { motion } from "framer-motion";
import { FaStar, FaTrophy } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  { name: "Alexandre Reis", role: "Empreendedor", revenue: "R$ 35k/mês" },
  { name: "Wilson Santos", role: "Empreendedor", revenue: "R$ 28k/mês" },
  { name: "Rogerio Santos", role: "Empreendedor", revenue: "R$ 42k/mês" },
  { name: "Vilmar Lovato", role: "Empreendedor", revenue: "R$ 31k/mês" },
  { name: "Yuri Freire", role: "Empreendedor", revenue: "R$ 38k/mês" },
  { name: "Iam José", role: "Empreendedor", revenue: "R$ 45k/mês" },
  { name: "Cyntia", role: "Empreendedora", revenue: "R$ 33k/mês" },
  { name: "Natan Lemes", role: "Empreendedor", revenue: "R$ 40k/mês" },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    onSelect();

    // Auto-play
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-600/20 border border-yellow-400/30 backdrop-blur-xl mb-6"
          >
            <FaTrophy className="text-yellow-400 text-xl" />
            <span className="text-gray-200 font-semibold text-sm md:text-base">Histórias de Sucesso</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 bg-clip-text text-transparent text-glow">
            Conheça Nossos Alunos Empreendedores de Sucesso
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-normal leading-relaxed">
            Você já imaginou ter <strong className="text-yellow-300 font-semibold">seu próprio negócio</strong> e faturar <strong className="text-yellow-400 font-bold">20, 30, 50 mil reais por mês?</strong>
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {/* Glass Card Alto */}
                  <div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
                    {/* Glassmorphism background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/40 backdrop-blur-2xl" />
                    
                    {/* Border glow */}
                    <div className="absolute inset-0 rounded-3xl border border-yellow-400/30 group-hover:border-yellow-400/50 transition-all duration-500" />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                      {/* Avatar com gradiente animado */}
                      <motion.div
                        className="relative mb-6"
                        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full blur-xl opacity-50"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.7, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-yellow-500 to-amber-700 flex items-center justify-center text-4xl font-bold text-slate-900 shadow-2xl">
                          {testimonial.name.charAt(0)}
                        </div>
                      </motion.div>

                      {/* Name */}
                      <motion.h3 
                        className="text-2xl font-bold text-gray-100 mb-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {testimonial.name}
                      </motion.h3>
                      
                      {/* Role */}
                      <p className="text-gray-300 text-base mb-4">
                        {testimonial.role}
                      </p>

                      {/* Revenue Badge com pulse */}
                      <motion.div 
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/30 mb-6"
                        whileHover={{ scale: 1.1 }}
                        animate={{ 
                          boxShadow: [
                            "0 0 0 0 rgba(74, 222, 128, 0)",
                            "0 0 0 10px rgba(74, 222, 128, 0)",
                          ]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <p className="text-green-300 font-bold text-lg">
                          {testimonial.revenue}
                        </p>
                      </motion.div>

                      {/* Stars com hover individual */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ 
                              scale: 1.3,
                              rotate: [0, -15, 15, 0],
                              transition: { duration: 0.3 }
                            }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <FaStar className="text-yellow-400 text-xl cursor-pointer" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-gray-200 text-sm italic leading-relaxed">
                        "Método transformador que mudou minha vida financeira"
                      </p>
                    </div>

                    {/* Bottom glow */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/80 to-amber-600/80 backdrop-blur-xl border border-yellow-400/30 items-center justify-center text-slate-900 hover:scale-110 transition-transform shadow-xl z-10"
          >
            ←
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/80 to-amber-600/80 backdrop-blur-xl border border-yellow-400/30 items-center justify-center text-slate-900 hover:scale-110 transition-transform shadow-xl z-10"
          >
            →
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-yellow-400 w-8"
                  : "bg-yellow-400/30 hover:bg-yellow-400/50"
              }`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl text-gray-300 font-semibold leading-relaxed">
            Veja outro exemplo de alunos que criaram um <strong className="text-yellow-400">negócio de sucesso</strong> se tornando <strong className="text-yellow-400">referência</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
