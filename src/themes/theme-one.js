import React from 'react';

import Preloader from '../components/Miscellaneous/Preloader';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/PortfolioSection';
import AboutSection from '../components/About/AboutSection';
import Shape from '../components/Shape/Shape';
import Awards from '../components/Awards/AwardsOne';
import Blog from '../components/Blog/BlogSection';
import CTA from '../components/CTA/CTAOne';
import Footer from '../components/Footer/Footer';
import SearchModal from '../components/Miscellaneous/SearchModal';
import OffcanvasMenu from '../components/Miscellaneous/OffcanvasMenu';
import MagicCursor from '../components/Miscellaneous/MagicCursor';
import LenisScroll from '../components/Header/LenisScroll';
import Skills from '../components/Skills/Skills';
import Background3D from '../components/SpinLogo/SpinLogo';
import { useTheme } from '../context/ThemeContext';
import VisualChart from '../components/Visual/Visual';

const ThemeOne = () => {
	const { isDarkMode } = useTheme();
    return (
        <div>
			<MagicCursor />
			<Preloader />
			<LenisScroll />
			<div className="main">
				<Header />
				<Background3D isDarkMode={isDarkMode} />
				<div id="main-wrapper" className="main-wrapper">
					<Hero />
					<Skills />
					<VisualChart />
					<Portfolio />
					<Blog />
					<Footer />
					<SearchModal />
					<OffcanvasMenu />
				</div>
			</div>
		</div>
    );
};

export default ThemeOne;