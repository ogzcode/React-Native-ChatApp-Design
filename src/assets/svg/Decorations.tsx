import Svg, { Path, Circle, G } from 'react-native-svg';
import { ThemeColors } from '../../theme/types';

interface DecorationProps {
    colors: ThemeColors;
}

const WavyLine = ({ colors }: DecorationProps) => (
    <Svg width="200" height="8" viewBox="0 0 200 8">
        <Path
            d="M1 4C40 4 40 1 80 1C120 1 120 7 160 7C200 7 200 4 199 4"
            stroke={`${colors.secondary}40`}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
        />
    </Svg>
);

const TopRightDecoration = ({ colors }: DecorationProps) => (
    <Svg width="200" height="250" viewBox="0 0 200 250" style={{ position: 'absolute', right: -40, top: -40 }}>
        <Path
            d="M200 0C140 60 180 120 120 150C60 180 20 220 0 250"
            stroke={`${colors.primary}50`}
            strokeWidth="3"
            fill="none"
        />
        <Path
            d="M200 30C145 85 185 140 130 167C75 194 38 230 20 250"
            stroke={`${colors.secondary}30`}
            strokeWidth="2"
            fill="none"
        />
        <Circle cx="160" cy="80" r="8" fill={`${colors.primary}70`} />
        <Circle cx="100" cy="140" r="6" fill={`${colors.secondary}50`} />
        <Path
            d="M180 20C160 30 150 50 170 70C190 90 180 110 160 120"
            stroke={`${colors.primary}40`}
            strokeWidth="2.5"
            fill="none"
        />
    </Svg>
);

const BottomLeftDecoration = ({ colors }: DecorationProps) => (
    <Svg width="200" height="200" viewBox="0 0 200 200" style={{ position: 'absolute', left: -50, bottom: -40 }}>
        <Path
            d="M0 200C60 140 30 100 90 70C150 40 190 20 200 0"
            stroke={`${colors.primary}50`}
            strokeWidth="3"
            fill="none"
        />
        <Path
            d="M20 200C75 145 45 110 100 83C155 56 182 36 200 20"
            stroke={`${colors.secondary}30`}
            strokeWidth="2"
            fill="none"
        />
        <Circle cx="50" cy="150" r="8" fill={`${colors.primary}70`} />
        <Circle cx="120" cy="90" r="6" fill={`${colors.secondary}50`} />
        <Path
            d="M30 160C50 140 40 120 20 100C0 80 10 60 30 40"
            stroke={`${colors.primary}40`}
            strokeWidth="2.5"
            fill="none"
        />
    </Svg>
);

export { WavyLine, TopRightDecoration, BottomLeftDecoration };