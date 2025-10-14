"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Award,
  Users,
  Mic,
  Code,
  Brain,
  Cloud,
  Database,
  ChevronDown,
} from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function PortfolioFr() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const downloadCV = () => {
    // Créer le contenu HTML pour le PDF
    const cvHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>CV - Amal Benzarti</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; color: #333; }
        .header { text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { color: #2563eb; margin: 0; font-size: 2.5em; }
        .header p { margin: 5px 0; color: #666; }
        .section { margin-bottom: 30px; }
        .section h2 { color: #2563eb; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; }
        .experience, .project { margin-bottom: 20px; }
        .experience h3, .project h3 { color: #1f2937; margin-bottom: 5px; }
        .company { color: #2563eb; font-weight: bold; }
        .date { color: #6b7280; font-style: italic; }
        ul { padding-left: 20px; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #eff6ff; color: #2563eb; padding: 5px 10px; border-radius: 15px; font-size: 0.9em; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Amal Benzarti</h1>
        <p>📧 benzartiamal71@gmail.com | 📱 +216 99474799 | 📍 Soukra, Ariana, Tunisie</p>
        <p><strong>Étudiante Ingénieur en Sécurité des systèmes informatiques et des réseaux</strong></p>
      </div>

      <div class="section">
        <h2>À Propos de Moi</h2>
        <p>Cela fait près de deux ans que j’ai choisi de me consacrer à la cybersécurité, 
        animée par la volonté de comprendre les systèmes dans leur globalité et de contribuer à leur protection. 
        J’ai débuté par l’exploration des approches offensives afin de mieux saisir les enjeux de défense et de sécurité organisationnelle.
         Aujourd’hui, je poursuis des certifications et des projets pratiques pour élargir ma vision vers la gestion et la structuration de 
         la sécurité au sein des organisations, au-delà de l’aspect purement technique.
        </p>
      </div>

      <div class="section">
        <h2>Éducation</h2>
        <div class="experience">
          <h3>École Supérieure Privée des Technologies et de l'Ingénierie, TEK-UP</h3>
          <p class="company">3ème année en ingénierie, Sécurité des systèmes informatiques et des réseaux</p>
          <p class="date">2023 – Présent</p>
        </div>
        <div class="experience">
          <h3>École Supérieure Privée des Technologies et de l'Ingénierie, TEK-UP</h3>
          <p class="company">Cycle préparatoire intégré</p>
          <p class="date">2021-2023</p>
        </div>
      </div>

      <div class="section">
        <h2>Expérience Professionnelle</h2>
        <div class="experience">
          <h3>Stagiaire DevSecOps</h3>
          <p class="company">SIGA</p>
          <p class="date">Juillet – Août 2025</p>
          <p>Conception et mise en place d’un pipeline CI/CD sécurisé suivant l’approche Shift-Left, intégrant Dependency-Track (SCA),
           SonarQube (SAST) et OWASP ZAP (DAST) via un outil CLI développé personnellement pour centraliser la configuration et automatiser l’exécution 
           des outils, afin de sécuriser le cycle de vie du développement logiciel et garantir une conformité continue.
          </p>

          //<p><strong>Technologies :</strong> +Python, Scikit-Learn, Flask, React.js, Azure, SQL, Plaid API</p>
        </div>

        <div class="experience">
          <h3>Stagiaire au sein de l'equipe SOC </h3>
          <p class="company">Agence nationale de la cybersecurite (ANCS)</p>
          <p class="date">Juillet - Août 2024</p>
          <p>Mise en place et configuration d’un IDS Suricata associé à la pile ELK sur un serveur Ubuntu. Adaptation des 
          règles de détection et simulation d’attaques depuis Kali Linux pour tester et améliorer la précision et l’efficacité du 
          système.</p>
          // <p><strong>Technologies :</strong> Java, JavaFX, Scene Builder, MySQL, AWS Rekognition</p>
        </div>
      </div>

      <div class="experience">
          <h3>Stage d'initiation </h3>
          <p class="company">Tunisie Telecom</p>
          <p class="date">Juillet 2022</p>
          <p>Développement et optimisation d’une plateforme de gestion de tâches</p>
          // <p><strong>Technologies :</strong> Java, JavaFX, Scene Builder, MySQL, AWS Rekognition</p>
        </div>
      </div>

      <div class="section">
        <h2>Projets Clés</h2>
        <div class="project">
          <p class="company">Lab Active Directory : mise en place et pentest</p>
          <p class="company">Plateforme SaaS de gestion et d'analyse du crédit pour les PME</p>
          <p>Mise en place d’un laboratoire Active Directory comprenant un contrôleur de domaine et une machine victime, ajout automatisé
          d’utilisateurs via script GitHub et réalisation de tests de pénétration sur les services et configurations, avec une attention
          particulière aux scénarios d’attaques réalistes.</p>
          // <p><strong>Technologies :</strong> AWS, Python, Django, React.js, MongoDB, Power BI</p>
        </div>

        <div class="project">
          <h3>Mise en place d’un réseau VPN/MPLS</h3>
          <p class="company">Système d'aide à la décision pour le diagnostic de la maladie d'Alzheimer</p>
          <p>Conception et configuration d’une architecture réseau VPN/MPLS sécurisée pour des communications intersites. Mise en œuvre
          de la segmentation du trafic et garantie de la confidentialité et de la disponibilité des données échangées.
          </p>
          //<p><strong>Technologies :</strong> R, Random Forest, KNN, SVM, Shiny, Python</p>
        </div>

        <div class="project">
          <p class="company">Système de surveillance par reconnaissance faciale conforme au RGPD</p>
          <p>immédiate des photos en encodages supprimant tout stockage direct. La base de données est décentralisée pour renforcer la
          sécurité, avec envoi d’alertes par e-mail et capture d’écran en cas d’intrusion, ainsi que déclenchement d’alarmes pour protéger les
          locaux.</p>
          //<p><strong>Technologies :</strong> Python, Llama, OpenAI, NLP, Hugging Face, TensorFlow, Flask</p>
        </div>
      </div>

      <div class="section">
        <h2>Compétences Techniques</h2>
        <h3>Langages de Programmation</h3>
        <div class="skills">
          <span class="skill">Python</span>
          <span class="skill">Java</span>
          <span class="skill">PHP</span>
          <span class="skill">JS</span>
          <span class="skill">SQL</span>
        </div>
        
        <h3>Defensive / Blue Team Tools</h3>
        <div class="skills">
          <span class="skill">Wireshark</span>
          <span class="skill">ELK</span>
          <span class="skill">Suricata</span>
        </div>

        <h3>Offensive Security / Penetration Testing Tools</h3>
        <div class="skills">
          <span><strong>Network scanning and reconnaissance:</strong> Nmap, Masscan, Netcat</span><br>
          <span><strong>Vulnerability assessment:</strong> Nikto</span><br>
          <span><strong>Exploitation frameworks:</strong> Metasploit, SQLmap, Burp Suite</span><br>
          <span><strong>Web application testing:</strong> Burp Suite, OWASP ZAP, DirBuster/Dirsearch</span><br>
          <span><strong>Password attacks:</strong> Hydra, John the Ripper, Hashcat</span><br>
          <span><strong>Wireless attacks:</strong>Wireshark</span>
        </div>
      </div>

        <h3>Frameworks Web</h3>
        <div class="skills">
          <span class="skill">Django</span>
          <span class="skill">Flask</span>
          <span class="skill">Symfony</span>
        </div>

        <h3>Cloud & Infrastructure</h3>
        <div class="skills">
          <span class="skill">AWS</span>
          <span class="skill">Docker</span>
          <span class="skill">CI/CD</span>
        </div>

        

      <div class="section">
        <h2>Certifications</h2>
        <div class="experience">
          <h3>[PCAP-31-03] PCAP™ – Certified Associate Python Programmer</h3>
          <p class="date">2022</p>
          <p>Certification du Python Institute validant les compétences de base en programmation Python, y compris la syntaxe, les structures de données et les concepts fondamentaux de programmation.</p>
        </div>
        <div class="experience">
          <h3> Junior Penetration Tester (eJPT)></h3>
          <p class="date">2025</p>
          <p>Certification pratique axée sur la mise en œuvre d’un test d’intrusion complet : reconnaissance, analyse de réseau, exploitation et post-exploitation.
           L’eJPT de INE évalue les bases solides nécessaires pour évoluer vers des rôles techniques en sécurité offensive.</p>
        </div>
        <div class="experience">
          <h3> Junior Penetration Tester (TryHackMe)></h3>
          <p class="date">2025</p>
          <p>Certification pratique axée sur la mise en œuvre complète d’un test d’intrusion : reconnaissance, exploitation et rédaction de rapport. 
          Le PT1 de TryHackMe permet d’évaluer les compétences opérationnelles d’un pentester dans des conditions proches du réel.</p>
        </div>
        <div class="experience">
          <h3> onSET -Zertifikat (eng)></h3>
          <p class="date">2025</p>
          <p>Certificat obtenu via le test de placement onSET, évaluant la compétence générale en anglais avec le format C-test. 
          Le niveau B2 atteste d’une maîtrise intermédiaire supérieure de la langue, suffisante pour la communication professionnelle, académique et quotidienne selon le CECR</p>
        </div>
      </div>

      <div class="section">
        <h2>Leadership & Activités</h2>
        <div class="experience">
          <h3>Secrétaire générale et fondatrice , Fortum Junior Entreprise</h3>
          <p class="date">2024-Présent</p>
          <p>Responsable de la coordination administrative et de l’organisation interne, assurant le bon fonctionnement de l’équipe et de ses activités.
Veille au suivi global des opérations et à la cohérence entre les différents membres et projets de l’organisation.</p>
        </div>
        <div class="experience">
          <h3>Organisatrice Global Game Jam 2022</h3>
          <p class="company">Gaming Lab Tek-up</p>
          <p class="date">2021-2022</p>
          <p>Participation à l’organisation de cet événement international de création de jeux vidéo, incluant la gestion des relations avec les sponsors, 
          la coordination des participants et la direction de la campagne médiatique.</p>
        </div>
      </div>

      <div class="section">
        <h2>Langues</h2>
        <div class="skills">
          <span class="skill">Français</span>
          <span class="skill">Anglais</span>
          <span class="skill">Arabe</span>
          <span class="skill">Turc</span>
        </div>
      </div>
    </body>
    </html>
  `

    // Créer un blob avec le contenu HTML
    const blob = new Blob([cvHTML], { type: "text/html" })
    const url = URL.createObjectURL(blob)

    // Créer un lien temporaire pour télécharger
    const link = document.createElement("a")
    link.href = url
    link.download = "CV_Amal_El_Benzarti.html"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    // Ouvrir dans une nouvelle fenêtre pour impression PDF
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(cvHTML)
      printWindow.document.close()

      // Attendre que le contenu soit chargé puis déclencher l'impression
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print()
        }, 500)
      }
    }
  }

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "education"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Email Provider Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[90vw] max-w-md animate-fade-in">
            <h2 className="text-xl font-bold mb-4 text-slate-800 text-center">Choisissez votre service d'email</h2>
            <div className="flex flex-col gap-3">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:scale-105 transition-transform"
                onClick={() => {
                  window.open('https://outlook.live.com/mail/0/deeplink/compose?to=benzartiamal71@gmail.com&subject=Contact%20depuis%20portfolio', '_blank');
                  setShowEmailModal(false);
                }}
              >
                <Mail className="w-5 h-5" /> Outlook
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium hover:scale-105 transition-transform"
                onClick={() => {
                  window.open('https://mail.google.com/mail/?view=cm&to=benzartiamal71@gmail.com&su=Contact%20depuis%20portfolio', '_blank');
                  setShowEmailModal(false);
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 13.065L2.4 6.6A2 2 0 0 1 4 4h16a2 2 0 0 1 1.6 2.6l-9.6 6.465z"/><path d="M22 8.235V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.235l9.6 6.465a2 2 0 0 0 2.4 0L22 8.235z"/></svg>
                Gmail
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium hover:scale-105 transition-transform"
                onClick={() => {
                  window.open('https://compose.mail.yahoo.com/?to=benzartiamal71@gmail.com&subj=Contact%20depuis%20portfolio', '_blank');
                  setShowEmailModal(false);
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4v16h20V4H2zm18 2v2.586l-8 8-8-8V6h16zm0 12H4v-7.414l8 8 8-8V18z"/></svg>
                Yahoo
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 text-white font-medium hover:scale-105 transition-transform"
                onClick={() => {
                  window.open('mailto:benzartiamal71@gmail.com?subject=Contact%20depuis%20portfolio', '_blank');
                  setShowEmailModal(false);
                }}
              >
                <Mail className="w-5 h-5" /> Autre (App par défaut)
              </button>
            </div>
            <button
              className="mt-6 w-full py-2 rounded-lg bg-slate-200 text-slate-700 font-medium hover:bg-slate-300 transition-colors"
              onClick={() => setShowEmailModal(false)}
            >
              Annuler
            </button>
          </div>
        </div>
      )}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation fixe */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Amal Benzarti
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                { id: "hero", label: "Accueil" },
                { id: "about", label: "À Propos" },
                { id: "experience", label: "Expérience" },
                { id: "projects", label: "Projets" },
                { id: "skills", label: "Compétences" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? "text-blue-600" : "text-slate-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="/Amal-Benzarti.pdf"
                download
                className="inline-flex items-center border border-slate-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ textDecoration: 'none' }}
              >
                <Download className="w-4 h-4 mr-2" />
                CV PDF
              </a>
              <button
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ textDecoration: 'none' }}
                onClick={() => setShowEmailModal(true)}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section Hero avec animation */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Étudiante en ingénierie informatique, spécialité sécurité des systèmes informatiques et des réseaux
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Amal
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                  Benzarti
                </span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                Passionnée par la cybersécurité et la protection des systèmes informatiques. Actuellement en dernière année d'ingénierie,
                j'explore la sécurité offensive et défensive tout en me préparant à la gouvernance, le risque et la conformité (GRC).
              </p>
            </div>

            {/* Informations de contact avec animations */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
                <span>benzartiamal71@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
                <span>+216 99474799</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">
                <MapPin className="w-5 h-5" />
                <span>Soukra, Ariana, Tunisie</span>
              </div>
            </div>

            {/* Technologies principales */}
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "Cybersécurité", "Penetration Testing",  "ELK Stack", "Suricata", "DevSecOps", "GRC"
              ].map((tech, index) => (
                <Badge
                  key={tech}
                  className={`px-3 py-1 hover:scale-105 transition-transform cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-transform"
                onClick={() => scrollToSection("projects")}
              >
                Voir mes projets
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-transform bg-transparent"
                onClick={() => scrollToSection("about")}
              >
                En savoir plus
              </Button>
            </div>
          </div>

          {/* Photo professionnelle avec effets */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              {/* Cercles décoratifs animés */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>

              {/* Photo principale */}
              <div className="relative z-10 w-80 h-80 mx-auto">
                <Image
                  src="/images/amal-portrait.jpeg"
                  alt="Amal El Benzarti - Portrait professionnel"
                  fill
                  className="rounded-2xl object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: 'top' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* Section À Propos */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">À Propos de Moi</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Cela fait près de deux ans que j’ai choisi de me consacrer à la cybersécurité, animée par la volonté de comprendre les systèmes dans leur 
                globalité et de contribuer à leur protection. J’ai débuté par l’exploration des approches offensives afin de mieux saisir les enjeux de défense 
                et de sécurité organisationnelle. Aujourd’hui, je poursuis des certifications et des projets pratiques pour élargir ma vision vers la gestion et la 
                structuration de la sécurité au sein des organisations, au-delà de l’aspect purement technique.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg hover:scale-105 transition-transform">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-800">Cybersécurité</h3>
                  <p className="text-sm text-slate-600">Offensive & Défensive</p>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg hover:scale-105 transition-transform">
                  <Users className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-800">GRC</h3>
                  <p className="text-sm text-slate-600">Gouvernance & Conformité</p>
                </div>
              </div>
        </div>
      </section>

      {/* Section Expérience */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Expérience Professionnelle</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Stagiaire DevSecOps</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600">SIGA</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-blue-50">
                    Juillet - Août 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 font-medium">Pipeline CI/CD sécurisé avec approche Shift-Left</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
                  <li>
                    Conception et mise en place d'un pipeline CI/CD sécurisé suivant l'approche Shift-Left
                  </li>
                  <li>Intégration de Dependency-Track (SCA), SonarQube (SAST) et OWASP ZAP (DAST)</li>
                  <li>
                    Développement d'un outil CLI pour centraliser la configuration et automatiser l'exécution des outils
                  </li>
                  <li>Sécurisation du cycle de vie du développement logiciel et garantie de conformité continue</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Python", "DevSecOps", "CI/CD", "Dependency-Track", "SonarQube", "OWASP ZAP", "CLI"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Stagiaire au sein de l'équipe SOC</CardTitle>
                    <CardDescription className="text-lg font-medium text-green-600">
                      Agence nationale de la cybersécurité (ANCS)
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-green-50">
                    Juillet - Août 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6">
                  <li>Mise en place et configuration d'un IDS Suricata associé à la pile ELK sur un serveur Ubuntu</li>
                  <li>Adaptation des règles de détection et simulation d'attaques depuis Kali Linux</li>
                  <li>Test et amélioration de la précision et l'efficacité du système de détection</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Suricata", "ELK Stack", "Ubuntu", "Kali Linux", "IDS"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Projets Clés</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Brain className="w-6 h-6" />
                  Lab Active Directory
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Mise en place et pentest d'un lab Active Directory
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 mb-4">
                  <li>Mise en place d'un laboratoire Active Directory avec contrôleur de domaine et machine victime</li>
                  <li>Ajout automatisé d'utilisateurs via script GitHub</li>
                  <li>Réalisation de tests de pénétration sur les services et configurations</li>
                  <li>Scénarios d'attaques réalistes et documentation des vulnérabilités</li>
                </ul>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["Active Directory", "PowerShell", "Penetration Testing", "Windows Server", "Kali"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center border border-blue-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent group-hover:bg-blue-50"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir le projet
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Database className="w-6 h-6" />
                  Réseau VPN/MPLS
                </CardTitle>
                <CardDescription className="text-purple-100">
                  Conception et configuration d'une architecture réseau VPN/MPLS sécurisée
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 mb-4">
                  <li>Conception et configuration d'une architecture réseau VPN/MPLS sécurisée</li>
                  <li>Mise en œuvre de la segmentation du trafic</li>
                  <li>Garantie de la confidentialité et de la disponibilité des données échangées</li>
                </ul>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["Haute disponibilité", "Routage et commutation", "Monitoring réseau", "Contrôle d’accès"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center border border-purple-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent group-hover:bg-purple-50"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir le projet
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Brain className="w-6 h-6" />
                  Système de Surveillance RGPD
                </CardTitle>
                <CardDescription className="text-green-100">
                  Système de surveillance par reconnaissance faciale conforme au RGPD
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 mb-4">
                  <li>Système de surveillance par reconnaissance faciale conforme au RGPD</li>
                  <li>Encodage immédiat des photos sans stockage direct</li>
                  <li>Base de données décentralisée pour renforcer la sécurité</li>
                  <li>Envoi d'alertes par e-mail et capture d'écran en cas d'intrusion</li>
                </ul>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["Python", "Reconnaissance Faciale", "RGPD", "Sécurité", "Alertes"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center border border-green-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent group-hover:bg-green-50"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir le projet
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Brain className="w-6 h-6" />
                 Mise en place d’une architecture de haute disponibilité d’ERP (ODOO) applicable pour 
                 une entreprise active dans le domaine des TIC afin de se conformer aux exigences d’un SMSI selon l’ISO 27001 :
                </CardTitle>
                <CardDescription className="text-green-100">
                  Architecture de haute disponibilité d’ERP (ODOO)
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 mb-4">
                  <li>Conception et mise en œuvre d’une architecture haute disponibilité pour un environnement ERP (Odoo), en mettant l’accent sur la résilience et la continuité de service.</li>
                  <li>Application des bonnes pratiques ISMS / ISO 27001, avec focus sur disponibilité, intégrité et sécurité des données.</li>
                  <li>Déploiement sur VM Red Hat minimalistes, simulant un environnement d’entreprise réel, pour renforcer la rigueur opérationnelle et la gestion à distance via SSH.</li>
                  <li>Orchestration des services avec Kubernetes, garantissant redondance applicative et persistance des données.</li>
                </ul>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["Kubernetes", "Podman", "ISO 27001 / ISMS", "PostgreSQL", "NFS", "Load Balancer"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center border border-green-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent group-hover:bg-green-50"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir le projet
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Brain className="w-6 h-6" />
                  Mise en place d'une architecture de haute disponibilité basée sur des outils de prévention anti-DDoS, open source
                </CardTitle>
                <CardDescription className="text-green-100">
                  Architecture de haute disponibilité basée sur des outils de prévention anti-DDoS
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 mb-4">
                  <li>Conception et mise en œuvre d’une architecture haute disponibilité pour un environnement ERP (Odoo), intégrant redondance applicative et réplication de base de données.</li>
                  <li>Renforcement de la sécurité et prévention des attaques DDoS grâce à l’utilisation de NGINX Ingress Controller et CrowdSec pour le routage, la terminaison SSL, le WAF et la limitation de débit.</li>
                  <li>Application des bonnes pratiques ISMS / ISO 27001, avec focus sur disponibilité, intégrité et sécurité des données.</li>
                  <li>Déploiement sur VM Red Hat minimalistes, simulant un environnement d’entreprise réel, avec gestion distante via SSH.</li>
                  <li>Orchestration des services avec Kubernetes, garantissant redondance applicative, persistance des données et tolérance aux pannes.</li>
                </ul>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["Kubernetes", "Podman", "PostgreSQL", "NFS", "Load Balancer","Nginx ingress controller","Crowdsec"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs hover:scale-105 transition-transform">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full justify-center border border-green-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent group-hover:bg-green-50"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir le projet
                </a>
              </CardContent>
            </Card>

          
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Compétences Techniques</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Langages de Programmation
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "PHP", "JavaScript", "SQL", "PowerShell"].map((lang) => (
                    <Badge key={lang} className="hover:scale-105 transition-transform bg-blue-100 text-blue-800">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Outils de Sécurité Défensive
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {["Wireshark", "ELK Stack", "Suricata", "IDS", "SIEM", "Log Analysis"].map((tool) => (
                    <Badge key={tool} className="hover:scale-105 transition-transform bg-purple-100 text-purple-800">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Outils de Penetration Testing
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {["Nmap", "Metasploit", "Burp Suite", "OWASP ZAP", "Hydra", "John the Ripper"].map((framework) => (
                    <Badge key={framework} className="hover:scale-105 transition-transform bg-green-100 text-green-800">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
                  DevSecOps & CI/CD
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {["Docker", "CI/CD", "DevSecOps", "Dependency-Track", "SonarQube"].map((cloud) => (
                    <Badge key={cloud} className="hover:scale-105 transition-transform bg-orange-100 text-orange-800">
                      {cloud}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Frameworks Web
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {["Django", "Flask", "Symfony", "React.js", "Bootstrap"].map((data) => (
                    <Badge key={data} className="hover:scale-105 transition-transform bg-indigo-100 text-indigo-800">
                      {data}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.05] border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  GRC & Conformité
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {["PCA", "RGPD", " Audit selon la norme ISO 27001" ].map((ai) => (
                    <Badge key={ai} className="hover:scale-105 transition-transform bg-pink-100 text-pink-800">
                      {ai}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Leadership & Activités */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Leadership & Activités</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <Card className="border-l-4 border-l-purple-500 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Secrétaire générale et Fondatrice
                  </CardTitle>
                  <CardDescription>2024 - Présent</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    En 2024, nous avons fondé Fortum Junior Entreprise, un projet associatif que 
                    nous avons structuré de A à Z : création des processus internes, préparation des 
                    audits et pilotage de projets réels. Durant la phase Junior Création, j’ai contribué
                     à lancer plusieurs initiatives, dont l’événement Hack’N’Biz, tout en coordonnant le
                      recrutement et la gestion de l’équipe. Cette expérience m’a permis de renforcer mes 
                      compétences en gestion, organisation et conduite de projet.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <Image
                src="/images/bureau.JPG"
                alt="Bureau Éxécutif de Fortum Junior Entreprise"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-medium">Bureau Éxécutif de Fortum Junior Entreprise</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/securinets.jpeg"
                alt="Secrétaire général et membre du comité organisateur"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <Card className="border-l-4 border-l-teal-500 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Membre</CardTitle>
                  <CardDescription>Securinets Tek-Up 2024-2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                     Participation à l’organisation de workshops et d’événements internes de Securinets Tek-Up, 
                     avec contribution à la planification logistique et à la coordination des activités pour assurer le bon déroulement des sessions. 
                     Participation active à des CTFs organisés par le club, mettant en pratique des compétences en sécurité offensive et défensive.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">Adjointe Trésorier</CardTitle>
                  <CardDescription>Rotaract Club Tunis El Bey (2022-2023)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Participe à la gestion financière du club et au suivi des opérations comptables sous la 
                    supervision du trésorier principal. Contribue à assurer la 
                    transparence des dépenses et la bonne utilisation des fonds pour les actions du club.
                  </p>
                </CardContent>
              </Card>

              
            </div>
          </div>
        </div>
      </section>

      {/* Section Éducation & Certifications */}
      {/* Section Éducation */}
      <section id="education" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Éducation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg flex flex-col h-full justify-between">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">3A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Ingénierie en Sécurité des systèmes informatiques et des réseaux</h4>
                    <p className="text-slate-600">TEK-UP - École Supérieure Privée des Technologies</p>
                    <p className="text-sm text-slate-500">2023 - Présent (3ème Année)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg flex flex-col h-full justify-between">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">CP</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Cycle Préparatoire Intégré</h4>
                    <p className="text-slate-600">TEK-UP</p>
                    <p className="text-sm text-slate-500">2021 - 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

 <section id="certifications" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
      {/* PCAP Certification Card */}
      <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Cloud className="w-8 h-8 text-blue-600" />
           [PCAP-31-03] PCAP™ – Certified Associate Python Programmer
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <Cloud className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 text-lg">
                
              </h4>
              <p className="text-blue-500 font-medium">2025</p>
              <p className="text-slate-500 text-sm mt-2">
                Certification du Python Institute validant les compétences de base en programmation Python, y compris la syntaxe, les structures de données et les concepts fondamentaux de programmation.
              </p>
              <a
                href="https://www.credly.com/badges/dc9c841d-d8f7-44c0-8dcb-48ec7792917f/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-green-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-green-50 mt-4"
                style={{ textDecoration: 'none' }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir le certificat
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* EJPT Certification Card */}
      <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Cloud className="w-8 h-8 text-orange-500" />
           Junior Penetration Tester (eJPT)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
              <Cloud className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <p className="text-orange-500 font-medium">2025</p>
              <p className="text-slate-500 text-sm mt-2">
                Certification pratique axée sur la mise en œuvre d’un test d’intrusion complet : reconnaissance, analyse de réseau, exploitation et post-exploitation.
              </p>
              <a
                href="https://certs.ine.com/5b16fd71-c2d7-48ad-94b6-a142a3b123d6#acc.N67F1lWm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-green-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-green-50 mt-4"
                style={{ textDecoration: 'none' }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir le certificat
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* pt1 */}
      <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Database className="w-8 h-8 text-green-600" />
           PT1 (TryHackMe)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
              <Database className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <p className="text-green-600 font-medium">2025</p>
              <p className="text-slate-500 text-sm mt-2">
                Certification pratique axée sur la mise en œuvre complète d’un test d’intrusion : reconnaissance, exploitation et rédaction de rapport. 
              </p>
              <a
                href="https://www.credly.com/badges/58b54d16-75ee-4859-929c-320bcfbfa9ac/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-green-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-green-50 mt-4"
                style={{ textDecoration: 'none' }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir le certificat
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* onSET */}
      <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Database className="w-8 h-8 text-green-600" />
           onSET -Zertifikat (eng)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
              <Database className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <p className="text-green-600 font-medium">2025</p>
              <p className="text-slate-500 text-sm mt-2">
                Certificat évaluant la compétence générale en anglais avec le format C-test. 
                Le niveau B2 atteste d’une maîtrise intermédiaire supérieure de la langue, suffisante pour la communication professionnelle, académique et quotidienne selon le CECR
              </p>
              <a
                href="https://drive.google.com/file/d/1S0pMSwAixc2Ep1aJwHgcuVTi4saaRgoE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-green-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-green-50 mt-4"
                style={{ textDecoration: 'none' }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir le certificat
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      {/* Section Contact */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Travaillons Ensemble</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Je suis toujours intéressé par de nouvelles opportunités et des projets stimulants. Discutons de la façon
            dont je peux contribuer au succès de votre équipe.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="https://outlook.live.com/mail/0/deeplink/compose?to=benzartiamal71@gmail.com&subject=Contact%20depuis%20portfolio"
              className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ textDecoration: 'none' }}
            >
              <Mail className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-slate-300">benzartiamal71@gmail.com</p>
            </a>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <Phone className="w-8 h-8 mb-4 text-green-400" />
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <p className="text-slate-300">+216 99474799</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <MapPin className="w-8 h-8 mb-4 text-red-400" />
              <h3 className="font-semibold mb-2">Localisation</h3>
              <p className="text-slate-300">Soukra, Ariana, Tunisie</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <button
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md px-6 py-3 text-lg font-medium hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ textDecoration: 'none' }}
              onClick={() => setShowEmailModal(true)}
            >
              <Mail className="w-5 h-5 mr-2" />
              Me Contacter
            </button>
            <a
              href="/Amal-Benzarti-ResumeFR-2025.pdf"
              download
              className="inline-flex items-center border border-slate-200 rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform bg-transparent hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ textDecoration: 'none' }}
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 Amal Benzarti. Tous droits réservés.</p>
        </div>
      </footer>
      </div>
    </>
  );
}
