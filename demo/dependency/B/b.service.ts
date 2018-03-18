import { Component } from '@nestjs/common';
import { CService } from '../C/c.service';

@Component()
export class BService {

	constructor(private readonly cService: CService) {

	}
	findAll() {
		console.log('Bservice')
	}
}