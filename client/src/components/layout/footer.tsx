import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-primary text-white">
      <div className="container-custom">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6">
            <a 
              href="https://www.linkedin.com/in/punith-kj/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Linkedin Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          
          <p className="mt-8 md:mt-0 text-center md:text-right text-gray-400">
            &copy; {new Date().getFullYear()} Punith KJ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
