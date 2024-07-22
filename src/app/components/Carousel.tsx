// components/Carousel.tsx
'use client';

import { useState } from 'react';
import styles from './Carousel.module.css';

const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
    '/images/image8.jpg',
];

const texts = [
    'Tu sais , tu es incroyable comme fille et comme aucune autre , tu es unique',
    'Ne sois pas triste. Pourquoi laisser la tristesse affecter ta beauté et ternir ton sourire ?',
    'Je t\'aime enormément et tu le sais princesse.',
    'Si je suis absent , distant ou occupé c\'est pour nous , tu le sais.',
    'Te rendre heureuse est ma priorité princesse',
    'Alors princesse ne sois pas triste , ne laisse pas la tristesse te vaincre',
    'Il ne se passe pas un moment où je ne pense pas a toi',
    'Princesse Je te péfère souriante',
    'Alors souris Eyram !!!'
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.carousel}>
            <button onClick={prevSlide} className={styles.button}>Précédent</button>
            <div className={styles.slide}>
                <img src={images[currentIndex]} alt="carousel" className={styles.image} width={500} height={300}/>
                <p className={styles.text}>{texts[currentIndex]}</p>
            </div>
            <button onClick={nextSlide} className={styles.button}>Suivant</button>
        </div>
    );
}
