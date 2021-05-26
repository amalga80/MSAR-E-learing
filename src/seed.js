export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Courses
      ============================================ */
  // Programming
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "C++",
      description:
        "C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.",
      genre: "programming",
      slug: "C++",
      videos: [
        { title: "Function", link: "EeVSCtVg4FI" },
        { title: "Insert data to file ( c++ ) ", link: "LEAaXCTuJmc" },
        { title: "Search in file c++", link: "bHZaFc5PfGw" },
        { title: "Display all data from file c++ ", link: "a7T8sSiL_Uo" },
        { title: "Update data in file c++ ", link: "GURW0yy94dY" },
        { title: "Delete data from file c++", link: "m-j68FTJ8aU" },
      ],
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: " Software Engineering",
      description:
        "Software engineering is the systematic application of engineering approaches to the development of software.",
      genre: "programming",
      slug: "Software Engineering",
      videos: [
        { title: " Service-oriented Architecture Part 1", link: "jA4MWmcQtUQ" },
        { title: "Service-oriented Architecture Part 2", link: "DKdyaWkDdGI" },
        { title: "Service-oriented Architecture Part 3", link: "Bo0MOxN152Y" },
        { title: "Embedded Systems", link: "bOG7y2CCIzY" },
      ],
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Information Security",
      description:
        "Information security, sometimes shortened to infosec, is the practice of protecting information by mitigating information risks. It is part of information risk management.",
      genre: "programming",
      slug: "Information Security",
      videos: [
        { title: " DES Algorithm (Encryption)", link: "-1xgf1TGpcI" },
        {
          title: "DES Modes of Operation (ECB, CBC, CFB, OFB, CTR)",
          link: "pQwW8DvxZMI",
        },
        { title: "Why Use XOR ^ in DES", link: "SYgbTPLPcAQ" },
        { title: "Double & Triple DES", link: "_Tqi3P0i__I" },
        { title: "MD2 (Hashes and message digests)", link: "BTf2zsvjvS0" },
        { title: "MD4 (Hashes and message digests)", link: "CWb1dSwXYZE" },
        { title: "MD5 (Hashes and message digests) ", link: "0aZUsj-bOmo" },
        {
          title: "Different between MD4 & MD5 (Hashes and message digests) ",
          link: "jA9-PF1fKLE",
        },
        { title: "FAQ ", link: "FaV84Az1qcY" },
      ],
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Computer science",
      description:
        "Computer science is the study of algorithmic processes, computational machines and computation itself. As a discipline, computer science spans a range of topics from theoretical studies of algorithms,",
      genre: "programming",
      slug: "computer science",
      videos: [
        { title: " Convert Binary number to Octal", link: "XKRiolZ6lLM" },
        { title: "FAQ ", link: "FaV84Az1qcY" },
      ],
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Java object oriented programming",
      description:
        "Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit's 1974 stunt walking on a wire across the Twin Towers.",
      genre: "programming",
      slug: "java object oriented programming",
      videos: [
        { title: " Introduction to Inheritance", link: "QiDBAAe6Mlg" },
        {
          title: "Subclass and super class - Inheritance ",
          link: "Y18u6xPNC3Q",
        },
        { title: "Why Use XOR ^ in DES", link: "SYgbTPLPcAQ" },
        {
          title: "Super Keyword and constructor chain - Inheritance ",
          link: "TpwfFRpk79g",
        },
        {
          title: "instanceof and summary of Inheritance - Inheritance",
          link: "dp_JPytCgVM",
        },
      ],
    });

  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Assembly",
      description:
        "In computer programming, assembly language, often abbreviated asm, is any low-level programming language in which there is a very strong correspondence between the instructions in the language and the architecture machine code instructions.",
      genre: "programming",
      slug: "assembly",
      videos: [
        {
          title: " Experiment 1 Swapping Ax , Bx Values 1",
          link: "QNIn1dbiv8A",
        },
        { title: "Experiment 2 ", link: "GDHgj04zoJA" },
        { title: "Experiment 3", link: "OT1fwiisKQc" },
      ],
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Computer Graphics",
      description:
        "Computer graphics deals with generating images with the aid of computers. Today, computer graphics is a core technology in digital photography, film, video games, cell phone and computer displays, and many specialized applications.",
      genre: "programming",
      slug: "computer Graphics",
      videos: [
        { title: "Hermite curve by python", link: "mzCyTYE10ZI" },
        {
          title: "How convert any object to egg model by blender",
          link: "MgzSpVN9Byw",
        },
        { title: "Add Photo To 3D Model In Panda3D ", link: "gSfBHUOQCp8" },
        {
          title: "Computer Graphics Midterm Exam Solution 2017",
          link: "jtT-T9h5QRc",
        },
      ],
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Operating system",
      description:
        "An operating system is system software that manages computer hardware, software resources, and provides common services for computer programs.",
      genre: "programming",
      slug: "operating system",
      videos: [
        {
          title: " Concurrency Deadlock and Starvation ( part 1 )",
          link: "PpVlAQNLb5I",
        },
        { title: "Deadlock Prevention Strategy", link: "c_qT5V6us9Q" },
        { title: "Deadlock Avoidance Strategy", link: "aTHXDOrF7d8" },
        { title: "Deadlock Detection Algorithms", link: "6BxQe-Ab9N0" },
        {
          title:
            "Dining Philosophers Problem : Deadlock solution : using Semaphore",
          link: "pU3fjsQtk-U",
        },
        {
          title: "Classification of multiprocessors system",
          link: "NBooNJaEcSU",
        },
        {
          title: "Assignment of processes to processors ",
          link: "alszuj7JlAE",
        },
        {
          title:
            "Multiprogramming on individual processors and actual dispatching of a process ",
          link: "Q0IbLgvM2nE",
        },
        { title: "process scheduiling ", link: "ocqkfd4AbP4" },
      ],
    });
  firebase
    .firestore()
    .collection("courses")
    .add({
      id: getUUID(),
      title: "Artificial Intelligence",
      description:
        "is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals, which involves consciousness and emotionality. The distinction between the former and the latter categories is often revealed by the acronym chosen.",
      genre: "programming",
      slug: "artificial intelligence",
      videos: [
        {
          title: " Introduction to Genetic algorithm Explanation",
          link: "GoRetaaS4oE",
        },
        { title: "Genetic algorithms Example", link: "UOB-HSYrZTA" },
        { title: "Vacuum World", link: "j44gqgR9nPI" },
        { title: "Map Coloring", link: "5DEu0scKY_8" },
        { title: "Towers of Hanoi", link: "8mdm1hgmeD8" },
        { title: "The 8-puzzle how make search tree", link: "BLq4wOvBoOM" },
        { title: "The Water Jugs Problem ", link: "2v0glSkWJio" },
        { title: "Goal Reduction (AND-OR tree/graph) ", link: "17p6hGUchIQ" },
      ],
    });

  /* Articales
      ============================================ */
  // Drama
  firebase.firestore().collection("articales").add({
    id: getUUID(),
    title: "What Is a Front-End Developer?",
    description:
      "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.",
    genre: "programming",
    slug: "what Is a Front-End Developer",
    link: "https://frontendmasters.com/books/front-end-handbook/2018/what-is-a-FD.html",
  });
  firebase.firestore().collection("articales").add({
    id: getUUID(),
    title: "Learn JavaScript",
    description:
      "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
    genre: "programming",

    slug: "learn JavaScript",
    link: "https://frontendmasters.com/books/front-end-handbook/2018/learning/javascript.html",
  });
  firebase.firestore().collection("articales").add({
    id: getUUID(),
    title: "Web/Browser APIs",
    description:
      "King George VI tries to overcome his stammering problem with the help of speech therapist Lionel Logue and makes himself worthy enough to lead his country through World War II.",
    genre: "programming",
    link: "https://frontendmasters.com/books/front-end-handbook/2018/learning/web-api.html",
    slug: "webBrowser APIs",
  });
  firebase.firestore().collection("articales").add({
    id: getUUID(),
    title: "The Revenant",
    description:
      "Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion, who betrayed him.",
    genre: "programming",

    slug: "the-revenant",
    link: "https://frontendmasters.com/books/front-end-handbook/2018/learning/html-css.html",
  });
  firebase.firestore().collection("articales").add({
    id: getUUID(),
    title: "SEO",
    description:
      "Mark Zuckerberg creates a social networking site, Facebook, with the help of his friend Eduardo Saverin. But soon, a string of lies tears their relationship apart even as Facebook connects people.",
    genre: "programming",
    link: "https://frontendmasters.com/books/front-end-handbook/2018/learning/seo.html",
    slug: "seo",
  });

  firebase.firestore().collection("articales").add({
    id: getUUID(),
    title: "Accessibility",
    description:
      "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
    genre: "programming",
    link: "https://frontendmasters.com/books/front-end-handbook/2018/learning/accessibility.html",
    slug: "accessibility",
  });
  firebase.firestore().collection("articales").add({
    id: getUUID(),
    title: "Web Hosting",
    description:
      "Nick Dunne discovers that the entire media focus has shifted on him when his wife Amy Dunne disappears on the day of their fifth wedding anniversary.",
    genre: "programming",
    link: "https://frontendmasters.com/books/front-end-handbook/2018/learning/hosting.html",
    slug: "web Hosting",
  });
}
