import toastr from 'toastr'
import * as ToastTypes from '../GravyRepository/Types/ToastrTypes';

export default class ToastUtilities{

    static DisplayMessage(message, messageType){

        if(message !== ''){

            switch(messageType){
                case ToastTypes.SUCCESS :
                    toastr.success(message);
                    break;

                case ToastTypes.ERROR :
                    toastr.error(message);
                    break;

                case ToastTypes.WARNING :
                    toastr.warning(message);
                    break;
            }


        }

    }


}

