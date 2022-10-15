import { Student } from '.';
import database from '../database';

export default class StudentModel {
  async create(student: Student): Promise<Student> {
    try {
      const query = 'INSERT INTO students (name, session_lead_id) VALUES ($1, $2) RETURNING *';
      const connection = await database.connect();
      const { rows } = await connection.query(query, [student.name, student.session_lead_id]);
      connection.release();
      return rows[0];
    } catch (error) {
      throw new Error(`Couldn't create new student because of this error: ${error}`);
    }
  }
}
