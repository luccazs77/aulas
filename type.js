var Default = /** @class */ (function () {
    function Default() {
        this.method();
        this.array = [{
                teste: 'teste'
            }];
    }
    Default.prototype.method = function () {
        this.texto = 'Este é um alert simples em typeScript';
        this.numero = 13;
        return alert(this.texto);
    };
    return Default;
}());
