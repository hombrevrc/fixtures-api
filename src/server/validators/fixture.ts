import { IFixture } from '../../data/types/fixture';
import BaseValidator from './base';

class FixtureValidator extends BaseValidator<IFixture> {
  create(body: any) {
    const schema = this.joi.object({
      away_team: this.joi.string().required(),
      date: this.joi.date().required(),
      home_team: this.joi.string().required(),
      match_day: this.joi.number(),
      stadium: this.joi.string(),
      status: this.joi.string().valid(['pending', 'ongoing', 'completed']),
      score: this.joi.object({
        winner: this.joi.string(),
        home_team: this.joi.number().required(),
        away_team: this.joi.number().required(),
      }),
      time: this.joi.string().required(),
    });

    return this.validate(body, schema, null);
  }

  update(body: any) {
    const schema = this.joi.object({
      date: this.joi.date(),
      time: this.joi.string(),
      match_day: this.joi.number(),
      stadium: this.joi.string(),
      status: this.joi.string().valid(['pending', 'ongoing', 'completed']),
      score: this.joi.object({
        winner: this.joi.string(),
        home_team: this.joi.number().required(),
        away_team: this.joi.number().required(),
      }),
    });

    return this.validate(body, schema, null);
  }
}

export default new FixtureValidator();
