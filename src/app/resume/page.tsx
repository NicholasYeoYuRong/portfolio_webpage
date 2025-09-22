import FadeContent from "@/components/FadeContent";
import React from "react";

export default function ResumePage() {
    return (
        <div>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <section id="resume" className="mx-auto max-w-3xl px-6 py-12 relative z-[2147483646]">

                {/* Header */}
                <header className="mb-6 print:mb-3">
                    <h1 className="text-3xl font-semibold leading-tight">Nicholas Yeo</h1>
                    <div className="mt-2 text-sm text-muted-foreground">
                    <a href="tel:+6597527286" className="hover:underline">+65 9752 7286</a> ·{" "}
                    <a href="mailto:nicyeo08@gmail.com" className="hover:underline">nicyeo08@gmail.com</a>
                    </div>
                </header>

                {/* Controls (hidden on print) */}
                <div className="mb-8 flex gap-3 print:hidden">
                    <a
                    href="/Nicholas_Yeo_Resume.pdf"
                    download="Nicholas_Yeo_Resume.pdf"
                    className="inline-flex items-center rounded-lg border px-4 py-2 text-sm hover:bg-accent"
                    >
                    Download PDF
                    </a>
                </div>

            {/* Education */}
                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold">Education</h2>
                    <div className="space-y-2">
                    <div className="flex items-start justify-between">
                        <div>
                        <div className="font-medium">Nanyang Technological University, Singapore</div>
                        <div className="text-sm text-muted-foreground">
                            Bachelor of Computing in Computer Science
                        </div>
                        </div>
                        <div className="text-sm">Aug 2023 – Aug 2027</div>
                    </div>

                    <div className="flex items-start justify-between">
                        <div>
                        <div className="font-medium">Nanyang Polytechnic, Singapore</div>
                        <div className="text-sm text-muted-foreground">
                            Diploma in Multimedia &amp; Infocomm Technology
                        </div>
                        <ul className="ml-5 list-disc text-sm text-muted-foreground">
                            <li>Director’s List recipient</li>
                            <li>Best MVC Application</li>
                            <li>Best Internet of Things (IoT) Project</li>
                        </ul>
                        </div>
                        <div className="text-sm">Apr 2018 – Mar 2021</div>
                    </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold">Work Experience</h2>
                    <div className="flex items-start justify-between">
                    <div>
                        <div className="font-medium">Essilor — Software Developer (Intern)</div>
                        <div className="text-sm text-muted-foreground">Singapore</div>
                        <ul className="ml-5 mt-1 list-disc text-sm">
                        <li>
                            Engineered a web application to streamline pediatric eye-tests, improving workflow
                            efficiency and user experience.
                        </li>
                        <li>
                            Built a mobile app to record head-posture data; adopted by <strong>70%</strong> of researchers to
                            support studies.
                        </li>
                        <li>
                            Implemented a real-time temperature monitoring page for <strong>5+ rooms</strong> to enhance
                            environmental tracking.
                        </li>
                        </ul>
                    </div>
                    <div className="text-sm">Jul 2020 – Feb 2021</div>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold">Academic Projects</h2>
                    <div className="space-y-4">

                        <div className="flex items-start justify-between">
                            <div>
                                <div className="font-medium">BarryBot (Telegram)</div>
                                <ul className="ml-5 list-disc text-sm text-muted-foreground">
                                    <li>Designed and developed a Telegram chatbot integrating the iCal API to manage schedules supporting event view, add, and delete actions directly in chat.</li>
                                    <li>Implemented location-aware food recommendations by deriving user coordinates via Google APIs and querying nearby dining options.</li>
                                    <li>Enabled natural, task-oriented interactions powered by Llama 3.2, improving usability and responsiveness.</li>
                                </ul>
                            </div>
                            <div className="text-sm">Jul 2025 – Sept 2025</div>
                        </div>

                        <div className="flex items-start justify-between">
                            <div>
                                <div className="font-medium">Hospital Management System — Developer</div>
                                <ul className="ml-5 list-disc text-sm text-muted-foreground">
                                    <li>Implemented 7 core functions to streamline operations for registered users.</li>
                                    <li>Built in Java with Excel-based storage and retrieval.</li>
                                    <li>Added authentication and role-based access for security and usability.</li>
                                </ul>
                            </div>
                            <div className="text-sm">Sep 2024 – Dec 2024</div>
                        </div>

                        <div className="flex items-start justify-between">
                            <div>
                                <div className="font-medium">BitesWithin — Developer (Android)</div>
                                <ul className="ml-5 list-disc text-sm text-muted-foreground">
                                    <li>Developed 7 features to help users discover nearby restaurants.</li>
                                    <li>Android Studio (Java) with Firebase for real-time data.</li>
                                    <li>Integrated Google Maps API for location-based recommendations.</li>
                                </ul>
                            </div>
                            <div className="text-sm">Sep 2024 – Dec 2024</div>
                        </div>

                        <div className="flex items-start justify-between">
                            <div>
                                <div className="font-medium">TransportTravelGO — Programmer</div>
                                <ul className="ml-5 list-disc text-sm text-muted-foreground">
                                    <li>Engineered 5 core features for a driver–rider taxi booking app.</li>
                                    <li>Dart + Firebase for auth and secure credential storage.</li>
                                    <li>Designed an intuitive UI with real-time ride tracking.</li>
                                </ul>
                            </div>
                            <div className="text-sm">Jul 2020 – Sep 2020</div>
                        </div>
                    </div>
                </section>

                {/* Activities / Leadership */}
                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold">Leadership &amp; Activities</h2>
                    <div className="space-y-3">
                    <div className="flex items-start justify-between">
                        <div>
                        <div className="font-medium">IdeasJam — Participant</div>
                        <ul className="ml-5 list-disc text-sm text-muted-foreground">
                            <li>Researched solid-state batteries and ultra-fast EV charging infrastructure.</li>
                            <li>Presented proposals on innovative battery solutions and fast-charging ports.</li>
                        </ul>
                        </div>
                        <div className="text-sm">Feb 2023 – Apr 2024</div>
                    </div>

                    <div className="flex items-start justify-between">
                        <div>
                        <div className="font-medium">AfterGlow (NTU) — President</div>
                        <ul className="ml-5 list-disc text-sm text-muted-foreground">
                            <li>Organized &amp; performed in 4 school events and 10 hall events.</li>
                            <li>Facilitated formation of 3 bands (6 members each).</li>
                        </ul>
                        </div>
                        <div className="text-sm">Jan 2023 – Jan 2024</div>
                    </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-2">
                    <h2 className="mb-2 text-xl font-semibold">Skills</h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                        <div className="text-sm font-medium">Frontend</div>
                        <div className="text-sm text-muted-foreground">
                        HTML, CSS, JavaScript, TypeScript, jQuery
                        </div>
                    </div>
                    <div>
                        <div className="text-sm font-medium">Backend</div>
                        <div className="text-sm text-muted-foreground">PHP, Node.js, SQL</div>
                    </div>
                    <div>
                        <div className="text-sm font-medium">Programming</div>
                        <div className="text-sm text-muted-foreground">Java, C++, C, Python</div>
                    </div>
                    <div>
                        <div className="text-sm font-medium">Tools &amp; IDEs</div>
                        <div className="text-sm text-muted-foreground">
                        VS Code, Android Studio, NetBeans, Brackets
                        </div>
                    </div>
                    <div>
                        <div className="text-sm font-medium">OS</div>
                        <div className="text-sm text-muted-foreground">Linux, Windows</div>
                    </div>
                    <div>
                        <div className="text-sm font-medium">Collaboration</div>
                        <div className="text-sm text-muted-foreground">Git, GitHub</div>
                    </div>
                    <div>
                        <div className="text-sm font-medium">Languages</div>
                        <div className="text-sm text-muted-foreground">English, Chinese</div>
                    </div>
                    </div>
                </section>

                <br />
                <br />

                {/* Download Section */}

                {/* <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold">Download</h2>
                    <div className="space-y-3">
                    <p>
                        You can download my resume using the link below:
                    </p>
                    <button
                        onClick={() => window.open("/Nicholas_Yeo_Resume.pdf")}
                        className="inline-block rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
                    >
                        Download Resume
                    </button>
                    </div>
                </section> */}
            </section>
            </FadeContent>
        </div>
    )
}