// Theme Constants - Centralized color scheme and design tokens
export const colors = {
  // Primary colors
  primary: "#DAA520", // Goldenrod
  primaryLight: "#F4D03F",
  primaryDark: "#B8860B",
  
  // Background colors
  bgDark: "#121212",
  bgDarker: "#0F0F0F",
  bgCard: "#1E1E1E",
  bgHeader: "#18181b",
  
  // Text colors
  textLight: "#FFFFFF",
  textMuted: "#D3D3D3",
  textDark: "#CCCCCC",
  
  // Accent colors
  accent: "teal.500",
  success: "#81C784",
  error: "#FF8A65",
  
  // Glow effects
  glowLight: "rgba(254, 255, 247, 1)",
  glowGold: "rgba(218, 165, 32, 0.6)",
  glowYellow: "rgba(206, 219, 28, 0.7)",
};

export const gradients = {
  goldGradient: "linear-gradient(135deg, #DAA520 0%, #F4D03F 50%, #DAA520 100%)",
  darkGradient: "linear-gradient(180deg, #121212 0%, #0F0F0F 100%)",
  glassGradient: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
};

export const shadows = {
  glow: `0 0 20px ${colors.glowGold}`,
  glowStrong: `0 0 30px ${colors.glowGold}, 0 0 60px ${colors.glowYellow}`,
  card: "0 8px 32px rgba(0, 0, 0, 0.3)",
  cardHover: "0 12px 48px rgba(218, 165, 32, 0.3)",
};

export const transitions = {
  fast: "all 0.2s ease-in-out",
  medium: "all 0.3s ease-in-out",
  slow: "all 0.5s ease-in-out",
};
