import { Component } from '@nestjs/common';
import { BService } from '../B/b.service';
import { DService } from '../D/d.service';
@Component()
export class AService {

	constructor(
		private readonly bService: BService, 
		private readonly dService: DService
	) { }
	findAll() {
		this.dService.findAll()
		return ['cat1', 'cat2']
	}
}