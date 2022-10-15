import { SessionLead } from '.';
import database from '../database';

export default class SessionLeadModel {
  async create(lead: SessionLead): Promise<SessionLead> {
    try {
      const query = 'INSERT INTO session_leads (name) VALUES ($1) RETURNING *';
      const connection = await database.connect();
      const { rows } = await connection.query(query, [lead.name]);
      connection.release();
      return rows[0];
    } catch (error) {
      throw new Error(`Couldn't create new session lead because of this error: ${error}`);
    }
  }
}
