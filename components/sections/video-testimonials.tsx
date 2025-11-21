"use client";

import { motion } from "framer-motion";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const videoTestimonials = [
  {
    id: "h2GrUhaAGU4",
    thumbnail: "https://img.youtube.com/vi/h2GrUhaAGU4/maxresdefault.jpg",
    title: "Depoimento 1",
  },
  {
    id: "Ye_Y_jlRNZM",
    thumbnail: "https://img.youtube.com/vi/Ye_Y_jlRNZM/maxresdefault.jpg",
    title: "Depoimento 2",
  },
  {
    id: "qTQooYORdiQ",
    thumbnail: "https://img.youtube.com/vi/qTQooYORdiQ/maxresdefault.jpg",
    title: "Depoimento 3",
  },
  {
    id: "MFofszVpQl4",
    thumbnail: "https://img.youtube.com/vi/MFofszVpQl4/maxresdefault.jpg",
    title: "Depoimento 4",
  },
  {
    id: "fDqP5DbcuSs",
    thumbnail: "https://img.youtube.com/vi/fDqP5DbcuSs/maxresdefault.jpg",
    title: "Depoimento 5",
  },
  {
    id: "qp7DhDEPhDE",
    thumbnail: "https://img.youtube.com/vi/qp7DhDEPhDE/maxresdefault.jpg",
    title: "Depoimento 6",
  },
  {
    id: "3rA9SosHXsU",
    thumbnail: "https://img.youtube.com/vi/3rA9SosHXsU/maxresdefault.jpg",
    title: "Depoimento 7",
  },
  {
    id: "l32iNHnIwh0",
    thumbnail: "https://img.youtube.com/vi/l32iNHnIwh0/maxresdefault.jpg",
    title: "Depoimento 8",
  },
  {
    id: "qV2Eot7NQrs",
    thumbnail: "https://img.youtube.com/vi/qV2Eot7NQrs/maxresdefault.jpg",
    title: "Depoimento 9",
  },
];

export default function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-600/20 border border-yellow-400/30 backdrop-blur-xl mb-6"
          >
            <FaPlay className="text-yellow-400 text-xl" />
            <span className="text-gray-200 font-semibold text-sm md:text-base">Depoimentos em Vídeo</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 bg-clip-text text-transparent">
            Veja Quem Já Está Faturando
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-normal leading-relaxed">
            Assista aos <strong className="text-yellow-300 font-semibold">depoimentos reais</strong> de quem transformou a vida com o método
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Fade gradients estilo Netflix */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-yellow-400/30 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-400 transition-all duration-300 group ml-4"
          >
            <FaChevronLeft className="text-yellow-400 group-hover:text-slate-900 transition-colors" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-yellow-400/30 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-400 transition-all duration-300 group mr-4"
          >
            <FaChevronRight className="text-yellow-400 group-hover:text-slate-900 transition-colors" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {videoTestimonials.map((video, index) => (
                <motion.div
                  key={video.id}
                  className="flex-[0_0_100%] md:flex-[0_0_48%] lg:flex-[0_0_31%] min-w-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedVideo(video.id)}
                  >
                    {/* Glass Card */}
                    <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/10' }}>
                      {/* Thumbnail */}
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                      {/* Glass effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-blue-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Border */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400/20 group-hover:border-yellow-400/60 transition-all duration-300" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-500 flex items-center justify-center shadow-2xl"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaPlay className="text-slate-900 text-2xl md:text-3xl ml-1" />
                        </motion.div>
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-xl border border-yellow-400/30 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-400 transition-all duration-300 group"
            >
              <span className="text-yellow-400 group-hover:text-slate-900 text-2xl font-bold">×</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
