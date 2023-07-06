/// <reference types="cypress"/>
import * as PostPedidosKonduto from "../requests/postPedidosKonduto.request";

describe("Post Pedidos Konduto", () => {
    it("Deve retornar status 500 caso o tax_id do cliente inicie em 11", () => {
        PostPedidosKonduto.postErro500("@response").should((response) => {
            expect(response.status).to.equal(500);
            expect(response.body.status).to.be.equal(500);
        })
    })
    it("Deve retornar status 400 caso o tax_id do cliente inicie em 12", () => {
        PostPedidosKonduto.postErro400("@response").should((response) => {
            expect(response.status).to.equal(500);
            expect(response.body.status).to.be.equal(400);
        })
    })
    it("Deve retornar status 401 caso o tax_id do cliente inicie em 13", () => {
        PostPedidosKonduto.postErro401("@response").should((response) => {
            expect(response.status).to.equal(500);
            expect(response.body.status).to.be.equal(401);
        })
    })
    it("Deve retornar status declined caso o tax_id do cliente inicie em 14", () => {
        PostPedidosKonduto.postDeclined("@response").should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.order.status).to.be.equal("declined");
        })
    })
    it("Deve retornar status pending caso o tax_id do cliente inicie em 15", () => {
        PostPedidosKonduto.postPending("@response").should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.order.status).to.be.equal("pending");
        })
    })
    it("Deve retornar status approved caso o tax_id do cliente inicie em 16", () => {
        PostPedidosKonduto.postAprroved("@response").should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.order.status).to.be.equal("approved");
        })
    })
})