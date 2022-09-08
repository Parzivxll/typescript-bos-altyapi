import { dbi } from '../../main';

dbi.register(({ Locale }) => {
    Locale({
        name: 'en',
        data: {
            test: {
                test: "Test started!"
            }
        }
    })
});