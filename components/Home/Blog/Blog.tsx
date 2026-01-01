import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section id="blogs" className="scroll-mt-[12vh] pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My latest <span className="text-cyan-300">Blogs</span>
      </h1>

      <div
        data-aos="zoom-in"
        data-aos-anchor-placement="top-center"
        data-aos-delay="100"
        className="w-[90%] sm:w-[80%] xl:w-[70%] mx-auto mt-16
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
      >
        <BlogCard
          image="/images/b8.png"
          title="AWS Architecture for a Next.js Portfolio Website"
          date="01 Jan 2026"
          stack={["AWS", "Architecture Diagrams", "Next.js", "Portfolio"]}
          link="https://www.linkedin.com/posts/vishishta-dilsara-14059a348_portfolio-deployment-architecture-%E0%B6%85%E0%B6%AF-%E0%B6%9A%E0%B6%AD-activity-7412355704105185282-PvZK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbwmUABo_7_6hfkW56yyiirbG3SiLcV-7c"
        />
        <BlogCard
          image="/images/b7.jpg"
          title="AWS Architecture Diagrams: Icons and Tools Explained"
          date="24 Dec 2025"
          stack={["AWS Icons", "Architecture Diagrams", "Cloud Computing"]}
          link="https://www.linkedin.com/posts/vishishta-dilsara-14059a348_aws-awsicons-architecture-activity-7409579835565465600-uBSZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbwmUABo_7_6hfkW56yyiirbG3SiLcV-7c"
        />
        <BlogCard
          image="/images/b4.jpg"
          title="TensorFlow vs NumPy: Understanding the Key Differences"
          date="04 Dec 2025"
          stack={["Tensorflow", "Numpy", "GPU"]}
          link="https://www.linkedin.com/posts/vishishta-dilsara-14059a348_%E0%B6%87%E0%B6%BA-numpy-%E0%B7%80%E0%B6%B1%E0%B7%80%E0%B6%A7-tensors-%E0%B6%B4%E0%B7%80%E0%B6%A0%E0%B6%A0-%E0%B6%9A%E0%B6%BB%E0%B6%B1%E0%B6%B1-activity-7402235314821636097--2No?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbwmUABo_7_6hfkW56yyiirbG3SiLcV-7c"
        />
        <BlogCard
          image="/images/b5.jpg"
          title="What Caused the AWS us-east-1 Outage?"
          date="20 Oct 2025"
          stack={["AWS", "Cloud Computing", "Outage Analysis"]}
          link="https://www.linkedin.com/posts/vishishta-dilsara-14059a348_the-aws-outage-amazon-web-services-%E0%B6%91%E0%B7%84%E0%B6%B8-activity-7386065452655087616-bl4d?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbwmUABo_7_6hfkW56yyiirbG3SiLcV-7c"
        />
        <BlogCard
          image="/images/b6.jpg"
          title="How Provider Works in Flutter Applications"
          date="19 Oct 2025"
          stack={["Flutter", "Provider", "State Management"]}
          link="https://www.linkedin.com/posts/vishishta-dilsara-14059a348_flutter-providers-%E0%B6%85%E0%B6%AF-%E0%B6%85%E0%B6%B4-%E0%B6%9A%E0%B6%AD-%E0%B6%9A%E0%B6%BB%E0%B6%B8-flutter-activity-7385637062600974336-N1mc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbwmUABo_7_6hfkW56yyiirbG3SiLcV-7c"
        />
      </div>
    </section>
  );
};

export default Blog;
