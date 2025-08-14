// app/a-propos/page.tsx
"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterOptimized from "@/components/FooterOptimized";
import { ArrowRightIcon } from "@/components/Icons";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function GlobeGrid() {
  const groupRef = useRef<THREE.Group | null>(null);

  // Rotation douce
  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.002;
  });

  const R = 3.2; // rayon plus grand
  const segments = 256; // lissage des cercles
  const lineColor = new THREE.Color(0xfacc16); // jaune foncé #EAB308 (yellow-600)
  const lineOpacity = 0.9;

  // Latitudes : -80 -> 80 tous les 10° (hors pôles extrêmes)
  const latitudes = useMemo(
    () => Array.from({ length: 17 }, (_, i) => -80 + i * 10),
    []
  );
  // Longitudes : 0 -> 350 tous les 10°
  const longitudes = useMemo(
    () => Array.from({ length: 36 }, (_, i) => i * 10),
    []
  );

  // Points d'un cercle dans le plan XZ (équateur)
  const circlePointsXZ = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(t), 0, Math.sin(t)));
    }
    return pts;
  }, [segments]);

  // Points d'un cercle dans le plan YZ (méridien de Greenwich)
  const circlePointsYZ = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(0, Math.cos(t), Math.sin(t)));
    }
    return pts;
  }, [segments]);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {" "}
      {/* sphère translucide subtile */}
      <mesh>
        <sphereGeometry args={[R, 48, 48]} />
        <meshPhongMaterial color={0xffffff} transparent opacity={0} />
      </mesh>
      {/* Parallèles (cercles XZ réduits et décalés en Y) */}
      {latitudes.map((lat) => {
        const phi = (Math.PI / 180) * lat;
        const y = Math.sin(phi) * R;
        const r = Math.cos(phi) * R;
        const scaled = circlePointsXZ.map(
          (p) => new THREE.Vector3(p.x * r, p.y + y, p.z * r)
        );
        const geom = new THREE.BufferGeometry().setFromPoints(scaled);
        return (
          <line key={`lat-${lat}`}>
            <bufferGeometry attach="geometry" {...geom} />
            <lineBasicMaterial
              attach="material"
              color={lineColor}
              transparent
              opacity={lineOpacity}
            />
          </line>
        );
      })}
      {/* Méridiens (cercles YZ pivotés autour de Y) */}
      {longitudes.map((lon) => {
        const theta = (Math.PI / 180) * lon;
        const rot = new THREE.Matrix4().makeRotationY(theta);
        const rotated = circlePointsYZ.map((p) =>
          p.clone().applyMatrix4(rot).multiplyScalar(R)
        );
        const geom = new THREE.BufferGeometry().setFromPoints(rotated);
        return (
          <line key={`lon-${lon}`}>
            <bufferGeometry attach="geometry" {...geom} />
            <lineBasicMaterial
              attach="material"
              color={lineColor}
              transparent
              opacity={lineOpacity}
            />
          </line>
        );
      })}
    </group>
  );
}

export default function AProposPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        {/* HERO */}
        <section className="bg-gradient-to-b from-yellow-50 to-white">
          <div className="max-w-7xl mx-auto md:px-6 pt-24 pb-16 ">
            <div className="grid md:grid-cols-2 items-center gap-8">
              {/* Left text */}
              <div>
                <h1 className="mb-4 md:mt-10 font-medium">
                  Votre guide <span className="italic">indépendant</span> pour
                  des plaques sur mesure
                </h1>
                <p className="text-gray-600 mb-8">
                  Découvrez la mission de labonneplaque.fr :{" "}
                  <strong>informer</strong>, <strong>guider</strong> et
                  permettre la <strong>personnalisation</strong> de votre plaque
                  d’immatriculation en toute simplicité, via un configurateur
                  intelligent.
                </p>
                <a
                  href="/#personnalisation"
                  className="group bg-yellow-400 text-black font-normal py-4 rounded-lg shadow-lg transition duration-300 inline-flex justify-center items-center px-6 border-2 border-black hover:text-black w-full md:w-fit gap-2 cta-faq"
                  title="Créer ma plaque personnalisée maintenant"
                >
                  Commander ma plaque
                  <ArrowRightIcon className="inline w-4 h-4 ml-2 cta-arrow-faq transform transition-transform duration-300 group-hover:-rotate-45" />
                </a>
              </div>

              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/teamplaque.avif"
                  alt="team"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* LOGO STRIP */}
        <section className="bg-white py-6 border-gray-200">
          <div className="max-w-lg mx-auto px-6 flex justify-center gap-8">
            <Image
              src="/images/logo/colissimo.png"
              alt="team"
              width={150}
              height={800}
              className="w-1/3 h-auto object-contain"
              loading="lazy"
            />
            <Image
              src="/images/logo/amazon.png"
              alt="team"
              width={150}
              height={800}
              className="w-1/3 h-auto object-contain pt-2"
              loading="lazy"
            />
            <Image
              src="/images/logo/chronopost.png"
              alt="team"
              width={150}
              height={800}
              className="w-1/3 h-auto object-contain"
              loading="lazy"
            />
          </div>
        </section>

        {/* SECTION 2 – two columns with left grid of 4 photos */}
        <section className="max-w-6xl mx-auto px-6 md:pb-20 pt-20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left column: eyebrow + title + 2x2 image grid */}
            <div>
              <div className=" badge badge-sm text-white mb-2 rounded-3xl">
                <p>Notre mission</p>
              </div>
              <h2 className="mb-4">
                La référence pour tout savoir sur les plaques d’immatriculation
              </h2>

              <div className="relative w-full h-[400px] mb-6 flex items-center justify-center">
                <Canvas
                  className="relative"
                  dpr={[1, 2]}
                  camera={{ position: [0, 0, 10], fov: 50 }} // plus loin = moins de crop
                >
                  <ambientLight intensity={0.5} />
                  <pointLight position={[5, 5, 5]} />
                  <GlobeGrid />
                </Canvas>
                <Image
                  src="/images/plaque.webp"
                  alt="Plaque"
                  width={400}
                  height={200}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 object-contain pointer-events-none"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right column: keep first two parts, remove the rest */}
            <div className="border-t pt-8 w-full md:">
              <p className="mb-6">
                Chez <strong>labonneplaque.fr</strong>, notre mission est
                claire&nbsp;: vous aider à <strong>faire le bon choix</strong>{" "}
                en matière de plaque d’immatriculation, en toute légalité,
                simplicité et confiance.
                <br />
                Nous sommes une{" "}
                <strong>plateforme d’information spécialisée</strong> qui vous
                permet de <strong>créer, personnaliser et commander</strong>{" "}
                votre plaque <strong>en quelques clics</strong> via un
                configurateur intelligent, avec le soutien d'un partenaire
                reconnu.
              </p>

              <h3 className="mb-3 font-medium">
                Pourquoi ce site existe-t-il ?
              </h3>
              <p className="mb-6">
                Parce que le monde des plaques d’immatriculation peut vite
                devenir flou. Entre les normes TPPR, les restrictions légales,
                les formats autorisés, les plaques décoratives, ou encore les
                tendances (plaques plexiglass, plaques noires, plaques moto…),
                il est facile de s’y perdre.
                <br />
                Nous avons donc créé <strong>labonneplaque.fr</strong> comme un{" "}
                <strong>hub de clarté</strong> pour :
              </p>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>
                  Répondre à toutes les <strong>questions fréquentes</strong>{" "}
                  sur les plaques
                </li>
                <li>
                  <strong>Centraliser les informations à jour</strong> sur les
                  démarches administratives
                </li>
                <li>
                  <strong>Proposer un configurateur pratique</strong> permettant
                  de créer votre plaque en toute conformité
                </li>
                <li>
                  Mettre à disposition des <strong>articles de fond</strong> sur
                  l’actualité auto et les évolutions réglementaires
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start text-left">
            <Image
              src="/images/about/iphone.webp"
              alt="Ce que vous trouverez"
              width={400}
              height={250}
              className="rounded-lg mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold mb-3">
              Ce que vous trouverez ici
            </h3>
            <p className="text-gray-600 text-sm">
              Un <strong>configurateur interactif</strong> pour créer votre
              plaque, une{" "}
              <strong>base de connaissances claire et vérifiée</strong>, des{" "}
              <strong>articles de blog</strong> sur les actualités auto et des{" "}
              <strong>réponses concrètes</strong> à vos questions via notre FAQ.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start text-left">
            <Image
              src="/images/about/plaqueimmat.webp"
              alt="Partenariat"
              width={400}
              height={250}
              className="rounded-lg mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold mb-3">
              Un partenariat au service de votre expérience
            </h3>
            <p className="text-gray-600 text-sm">
              Pour vous offrir le meilleur service, nous travaillons avec{" "}
              <a
                href="https://plaqueimmat.fr/?aff=9c7pyekcpurn"
                className="text-black underline"
              >
                plaqueimmat.fr
              </a>
              <strong></strong>, un acteur reconnu dans le domaine. Lorsque vous
              passez commande via notre configurateur, vous bénéficiez des mêmes
              prix et garanties, tout en soutenant le développement de notre
              plateforme et la création de contenus utiles.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start text-left">
            <Image
              src="/images/about/mockup.webp"
              alt="Notre engagement"
              width={400}
              height={250}
              className="rounded-lg mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold mb-3">Notre engagement</h3>
            <p className="text-gray-600 text-sm">
              Ici, pas de promesses exagérées ni de discours compliqués. Notre
              priorité : <strong>vous informer clairement</strong>, vous
              accompagner, et vous aider à choisir facilement la plaque qui vous
              convient. Nous privilégions la transparence, la fiabilité et
              l’utilité.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-16 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h3 className="mb-4">Créez votre plaque dès aujourd’hui</h3>
            <p className="mb-6 text-gray-600">
              Personnalisez votre plaque d’immatriculation en quelques clics
              grâce à notre configurateur intelligent. Choisissez votre style,
              vos couleurs et recevez votre plaque rapidement à domicile.
            </p>
            <a
              href="/#personnalisation"
              className="group bg-yellow-400 text-black font-normal py-4 rounded-lg shadow-lg transition duration-300 inline-flex justify-center items-center px-6 border-2 border-black hover:text-black gap-2"
              title="Créer ma plaque personnalisée maintenant"
            >
              Commander ma plaque
              <ArrowRightIcon className="inline w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:-rotate-45" />
            </a>
          </div>
        </section>
      </main>
      <FooterOptimized />
    </div>
  );
}
