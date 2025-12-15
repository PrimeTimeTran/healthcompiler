import { Layout } from "@/components/layout/Layout";
import { FDEHero } from "@/components/fde/FDEHero";
import { FDEOutcomes } from "@/components/fde/FDEOutcomes";
import { FDELoop } from "@/components/fde/FDELoop";
import { FDEDeployments } from "@/components/fde/FDEDeployments";
import { FDEProof } from "@/components/fde/FDEProof";
import { FDECta } from "@/components/fde/FDECta";
import { useEffect } from "react";

const FDE = () => {
  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <FDEHero />
      <FDEOutcomes />
      <FDELoop />
      <FDEDeployments />
      <FDEProof />
      <FDECta />
    </Layout>
  );
};

export default FDE;
