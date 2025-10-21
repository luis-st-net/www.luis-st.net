"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		class Particle {
			x: number;
			y: number;
			size: number;
			speedX: number;
			speedY: number;
			opacity: number;
			color: string;
			canvas: HTMLCanvasElement;

			constructor(canvasElement: HTMLCanvasElement) {
				this.canvas = canvasElement;
				this.x = Math.random() * this.canvas.width;
				this.y = Math.random() * this.canvas.height;
				this.size = Math.random() * 2 + 0.5;
				this.speedX = Math.random() * 0.5 - 0.25;
				this.speedY = Math.random() * 0.5 - 0.25;
				this.opacity = Math.random() * 0.5 + 0.2;

				const colors = [
					"96, 165, 250",
					"168, 85, 247",
					"6, 182, 212",
					"59, 130, 246",
				];
				this.color = colors[Math.floor(Math.random() * colors.length)];
			}

			update() {
				this.x += this.speedX;
				this.y += this.speedY;

				if (this.x > this.canvas.width) this.x = 0;
				if (this.x < 0) this.x = this.canvas.width;
				if (this.y > this.canvas.height) this.y = 0;
				if (this.y < 0) this.y = this.canvas.height;
			}

			draw() {
				if (!ctx) return;
				ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		const particles: Particle[] = [];
		const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);

		for (let i = 0; i < particleCount; i++) {
			particles.push(new Particle(canvas));
		}

		const animate = () => {
			if (!ctx) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			particles.forEach((particle, i) => {
				particles.slice(i + 1).forEach((otherParticle) => {
					const dx = particle.x - otherParticle.x;
					const dy = particle.y - otherParticle.y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 150) {
						ctx.strokeStyle = `rgba(${particle.color}, ${0.15 * (1 - distance / 150)})`;
						ctx.lineWidth = 0.5;
						ctx.beginPath();
						ctx.moveTo(particle.x, particle.y);
						ctx.lineTo(otherParticle.x, otherParticle.y);
						ctx.stroke();
					}
				});
			});

			particles.forEach((particle) => {
				particle.update();
				particle.draw();
			});

			requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);

	return (
		<>
			<canvas
				ref={canvasRef}
				className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
			/>

			<motion.div
				className="fixed top-20 left-10 w-[450px] h-[450px] bg-gradient-to-br from-custom-light-blue/12 via-custom-blue/8 to-transparent rounded-full blur-3xl pointer-events-none"
				animate={{
					x: [0, 120, 0],
					y: [0, 60, 0],
					scale: [1, 1.15, 1],
				}}
				transition={{
					duration: 22,
					repeat: Infinity,
					ease: "easeInOut"
				}}
				style={{ zIndex: 0 }}
			/>
			<motion.div
				className="fixed bottom-20 right-10 w-[550px] h-[550px] bg-gradient-to-br from-custom-accent-purple/12 via-custom-accent-cyan/8 to-transparent rounded-full blur-3xl pointer-events-none"
				animate={{
					x: [0, -100, 0],
					y: [0, -70, 0],
					scale: [1, 1.25, 1],
				}}
				transition={{
					duration: 28,
					repeat: Infinity,
					ease: "easeInOut"
				}}
				style={{ zIndex: 0 }}
			/>
			<motion.div
				className="fixed top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-custom-accent-cyan/10 via-custom-accent-purple/8 to-transparent rounded-full blur-3xl pointer-events-none"
				animate={{
					x: [-80, 80, -80],
					y: [-40, 40, -40],
					scale: [1, 1.12, 1],
				}}
				transition={{
					duration: 32,
					repeat: Infinity,
					ease: "easeInOut"
				}}
				style={{ zIndex: 0 }}
			/>
		</>
	);
}
