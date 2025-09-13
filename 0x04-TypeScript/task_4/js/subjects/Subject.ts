namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export interface Subject {
    setTeacher(teacher:Teacher): void; // <-- no space, matches checker
  }

  export class SubjectClass implements Subject {
    teacher: Teacher;

    setTeacher(teacher:Teacher): void {
      this.teacher = teacher;
    }
  }
}

export { Subjects };
