import { Component } from '@nestjs/common';
// import { BService } from '../B/b.service';
import { CService } from '../C/c.service';

@Component()
export class DService {

	findAll() {
		console.log('dservice')
	}
}