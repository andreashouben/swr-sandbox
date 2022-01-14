import {PathParams, ResponseFunction, ResponseTransformer, rest, RestContext, RestRequest} from 'msw';

function raisepassedId(req: RestRequest, res: ResponseFunction, ctx: RestContext) {
    const id = Number(req.params.id)
    return res(
        ctx.status(200), ctx.delay(500), ctx.json(id + 1)
    )
}

function createError(req: RestRequest, res: ResponseFunction, ctx: RestContext) {
    const {id} = req.params
    if (id !== undefined) {
        return res(
            ctx.status(500, `Error when fetching id ${id}`),
            ctx.delay(1000)
        )
    }
    return res(
        ctx.status(500),
        ctx.delay(1000)
    )
}

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
        return createError(req, res, ctx)
    }),
    rest.get('/cascade/:id', (req, res, ctx) => {
        return raisepassedId(req, res, ctx);
    }),
    rest.get('/erraticcascade/:id', (req, res, ctx) => {
        return Math.random() > 0.5 ?
            createError(req, res, ctx)
            : raisepassedId(req, res, ctx);
    })
]