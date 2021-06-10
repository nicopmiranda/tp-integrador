import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://test.ipg-online.com/',
	headers: { 'Content-Type': 'text/xml' },
	auth: {
		username: 'WSIPG',
		password: 'tester02'
	},
	url: '/ipgapi/services'
});

async function startTrx(payment) {
	return 'APPROVED';
	/*try{
        const response = await instance.post(transalateToGatewayReq);

    } catch (error){

    }
    
    Tendría que llamar a data de orders dentro de la base y guardar el response
    
    */
}

function transalateToGatewayReq(payment) {}

export default { startTrx };
