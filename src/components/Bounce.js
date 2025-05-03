import { useEffect, useRef } from "react";

const Bounce = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Canvas context not available");
      return;
    }

    // Set canvas size to match the window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log("Canvas resized:", canvas.width, canvas.height);
    };

    setCanvasSize();

    const constantSpeed = 3; // Set a constant speed for the balls

    class Ball {
      constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        // Check for bounce from the ground (vertical direction)
        if (this.y + this.radius + this.dy > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy; // Reverse vertical direction on collision with top or bottom
        }

        // Check for bounce from the walls (horizontal direction)
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx; // Reverse horizontal direction on collision with left or right
        }

        // Maintain constant speed, no change to dx or dy unless a bounce occurs
        this.x += this.dx;
        this.y += this.dy;

        // Draw the ball
        this.draw();
      }
    }

    let balls = [];

    const init = () => {
      balls = [];
      for (let i = 0; i < 40; i++) {
        const radius = Math.random() * 15 + 10;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2);
        const dx = constantSpeed * (Math.random() > 0.5 ? 1 : -1); // Constant horizontal speed
        const dy = constantSpeed * (Math.random() > 0.5 ? 1 : -1); // Constant vertical speed
        const color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        balls.push(new Ball(x, y, dx, dy, radius, color));
      }
      console.log("Initialized balls:", balls.length);
    };

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.forEach(ball => ball.update());
    };

    // Initialize the balls and start animation
    init();
    animate();

    // Handle resizing of the canvas
    const handleResize = () => {
      setCanvasSize();
      init(); // Reinitialize balls when resizing the window
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100vw",
        height: "100vh",
        display: "block",
        background: "transparent",
        border: "2px solid red", // For debugging visibility
      }}
    />
  );
};

export default Bounce;

