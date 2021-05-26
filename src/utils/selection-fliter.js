export default function selectionFilter({ courses, articales }) {
    return {
      courses: [
        { title: 'programming', data: courses.filter((item) => item.genre === 'programming') },
      ],
      articales: [
        { title: 'programming', data: articales.filter((item) => item.genre === 'programming') },
      ],
    };
  }