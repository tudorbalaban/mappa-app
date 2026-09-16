import React from 'react';
import { colors, typography } from '../design/tokens';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
}) => {
  const getStyles = () => {
    const baseStyle = {
      fontFamily: typography.fonts.ui,
      fontSize: typography.scale.body.size,
      fontWeight: 700,
      padding: '12px 20px',
      height: '40px',
      borderRadius: '4px',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyle,
          backgroundColor: colors.primary.grey900,
          color: colors.primary.grey100,
        };
      case 'secondary':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          border: `1px solid ${colors.primary.grey600}`,
          color: colors.primary.grey900,
        };
      case 'danger':
        return {
          ...baseStyle,
          backgroundColor: colors.accent.error,
          color: colors.primary.grey100,
        };
      default:
        return baseStyle;
    }
  };

  return (
    <button style={getStyles()} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
