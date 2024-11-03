import type {
    ExperienceProps,
    ProjectsProps,
    SocialObjects,
} from "@/lib/types";


export const SITE = {
    website: "https://hyperoot.dev",
    author: "HYP3R00T",
    desc: "Google IT Automation with Python Certified | Python Developer",
    title: "Hyperoot",
    repo: "https://github.com/HYP3R00T/v4.hyperoot.dev",
    ogImage: "/og-image.jpg"
};

export const LOCALE = {
    lang: "en", // html lang code. Set this empty and default will be "en"
}

export const experience: ExperienceProps[] = [
    {
        job_title: "Project Engineer · Wipro",
        duration: "2022 — 2024",
        description:
            "Served as a QA tester for a prominent client in the US medical insurance industry, specializing in ETL pipeline testing. I developed automated scripts using Python and Boto3 to support integration testing, designed OpenShift pipelines to optimize testing workflows, and maintained and enhanced the internal testing suite.",
        tags: ["Python", "AWS", "Azure", "Docker", "Linux", "OpenShift"],
        url: "https://www.wipro.com/",
    },
];

export const projects: ProjectsProps[] = [
    {
        name: "CelestialDocs",
        description:
            "CelestialDocs is a simple and versatile documentation template built with Astro. It provides a clean and minimal interface for creating documentation websites, leveraging the power of Astro and Tailwind CSS for a streamlined user experience.",
        homepage_url: "https://celestialdocs.hyperoot.dev/",
        tags: ["Astro", "TailwindCSS", "TypeScript", "JavaScript"],
    },
    {
        name: "Settings Organizer",
        description:
            "Settings Organizer is a simple yet powerful VSCode extension designed to keep your settings.json file clean and organized. It categorizes settings based on common patterns, ensuring your configuration file remains neat and easy to navigate. No more messy settings.json files—keep your workspace tidy and efficient with just a single command!",
        homepage_url:
            "https://marketplace.visualstudio.com/items?itemName=hyperoot.settings-organizer",
        tags: ["VSCode", "Extension", "TypeScript"],
    },
    {
        name: "hypercli",
        description:
            "hypercli is a Python package that provides an elegant solution for interacting with command line tools. It offers a menu-based command line interface (CLI) that allows users to navigate through different options and execute functions based on their choices.",
        homepage_url: "https://pypi.org/project/hypercli/",
        tags: ["Python", "PyPI"],
    },
    {
        name: "keypress",
        description:
            "This module offers a comprehensive solution for handling keyboard input across platforms. Whether you're detecting simple keypresses or complex key combinations, our module deliver robust functionality with clear, descriptive outputs. Perfect for developers needing to implement precise keyboard interactions in their applications.",
        homepage_url: "https://pypi.org/project/keypress/",
        tags: ["Python", "PyPI"],
    },
    {
        name: "FollowSphere",
        description:
            "FollowSphere is a Python package designed to streamline the process of following hashtags across various social media platforms. By allowing users to specify collections of hashtags (e.g., Python, DevOps), this tool helps you stay updated with the latest trends and discussions within your areas of interest.",
        homepage_url: "https://pypi.org/project/followsphere/",
        tags: ["Python", "PyPI", "Playwright"],
    },
    {
        name: "Cheatsheetify",
        description:
            "cheatsheetify is a command-line tool that generates PDF versions of cheatsheets for popular command-line tools.",
        homepage_url: "https://cheatsheetify.hyperoot.dev/",
        tags: ["Python", "PyPI"],
    },
];

export const Socials: SocialObjects[] = [
    {
        name: "github",
        href: "https://github.com/HYP3R00T/",
        linkTitle: ` ${SITE.title} on Github`,
        active: true,
    },
    {
        name: "facebook",
        href: "https://github.com/HYP3R00T/",
        linkTitle: `${SITE.title} on Facebook`,
        active: false,
    },
    {
        name: "instagram",
        href: "https://github.com/HYP3R00T/",
        linkTitle: `${SITE.title} on Instagram`,
        active: false,
    },
    {
        name: "linkedin",
        href: "https://www.linkedin.com/in/rajesh-kumar-das/",
        linkTitle: `${SITE.title} on LinkedIn`,
        active: true,
    },
    {
        name: "mail",
        href: "mailto:rajesh@hyperoot.dev",
        linkTitle: `Send an email to ${SITE.title}`,
        active: true,
    },
    {
        name: "x",
        href: "https://x.com/HYP3R00T",
        linkTitle: `${SITE.title} on Twitter`,
        active: true,
    },
    {
        name: "twitch",
        href: "https://github.com/HYP3R00T/",
        linkTitle: `${SITE.title} on Twitch`,
        active: false,
    },
    {
        name: "youtube",
        href: "https://www.youtube.com/@hyp3r00t",
        linkTitle: `${SITE.title} on YouTube`,
        active: true,
    },
    {
        name: "discord",
        href: "https://discord.gg/tWZRBhaPhd",
        linkTitle: `${SITE.title} on Discord`,
        active: false,
    },
    {
        name: "gitlab",
        href: "https://github.com/HYP3R00T/",
        linkTitle: `${SITE.title} on GitLab`,
        active: false,
    },
    {
        name: "reddit",
        href: "https://github.com/HYP3R00T/",
        linkTitle: `${SITE.title} on Reddit`,
        active: false,
    },
    {
        name: "telegram",
        href: "https://github.com/HYP3R00T/",
        linkTitle: `${SITE.title} on Telegram`,
        active: false,
    },
    {
        name: "mastodon",
        href: "https://mastodon.social/@hyp3r00t",
        linkTitle: `${SITE.title} on Mastodon`,
        active: true,
    },
];