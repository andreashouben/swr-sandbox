import {rest} from 'msw';

export const handlers = [
    rest.get('/slowget', (req, res, ctx) => {

        const randomNumber = Math.floor(Math.random() * 1_000)

        return res(
            ctx.status(200),
            ctx.delay(1000),
            ctx.json(`Here's a random number ${randomNumber}`)
        )
    }),
    rest.get('/errorget', (req, res, ctx) => {
        return res(
            ctx.status(500),
            ctx.delay(1000)
        )
    }),
    rest.get('/cascade/:id', (req, res, ctx) => {
        const id = Number(req.params.id)
        return res(
            ctx.status(200), ctx.delay(500), ctx.json(id+1)
        )
    })
]