import { Session, SessionStudent } from '.';
import database from '../database';

export default class SessionModel {
  async create(session: Session): Promise<Session> {
    try {
      const query = 'INSERT INTO sessions (title, session_date) VALUES ($1, $2) RETURNING *';
      const connection = await database.connect();
      const { rows } = await connection.query(query, [session.title, session.session_date]);
      connection.release();
      return rows[0];
    } catch (error) {
      throw new Error(`Couldn't create new session because of this error: ${error}`);
    }
  }

  async addStudent(sessionId: number, studentId: number): Promise<SessionStudent> {
    try {
      const query = 'INSERT INTO session_students (session_id, student_id) VALUES ($1, $2) RETURNING *';
      const connection = await database.connect();
      const { rows } = await connection.query(query, [sessionId, studentId]);
      connection.release();
      return rows[0];
    } catch (error) {
      throw new Error(`Couldn't create add student to session because of this error: ${error}`);
    }
  }
}
