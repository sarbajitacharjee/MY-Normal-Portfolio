import { useEffect } from 'react';
import gsap from 'gsap';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/mypicture.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import Resume from '../../assets/Resume.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  useEffect(() => {
    gsap.fromTo(
      `.${styles.hero}`,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: 'easeInOut' }
    );
    gsap.fromTo(
      `.${styles.info}`,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'easeInOut' }
    );
    gsap.fromTo(
      `.${styles.colorModeContainer}`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'easeInOut', delay: 0.5 }
    );
    gsap.fromTo(
      `.${styles.colorMode}`,
      { rotation: 0 },
      { rotation: 360, duration: 1, ease: 'easeInOut', repeat: -1 }
    );
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          height={380}
          width={100}
          alt="Profile picture of Sarbajit Acharjee"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sarbajit
          <br />
          Acharjee
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/SarbajitAcharj2" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/sarbajitacharjee" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/sarbajit-achariya25/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern web apps for Skill Building.
        </p>
        <a href={Resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
