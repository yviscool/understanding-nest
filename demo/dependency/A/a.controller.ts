import { Controller, Get, Response } from '@nestjs/common'
import { AService } from './a.service'

@Controller('/cats')
export class AController {

	constructor(
		private readonly aService: AService
	) { }

	@Get()
	findAll(@Response() res) {
		return this.aService.findAll()
	}
}