module.exports = function (application) {

	application.get('/', function(req, res){

		res.render('principal');

	});

	application.post('/gerarTabuada', function(req,res){

		console.log('Dados Recebidos Via post: ',req.body);
		
		res.render('calculoTabuada', {numero: req.body.inputNumero} );

	});

}