import reducerUtilities from '../reducerUtilities';
import {SafeCopy} from '../../Utilities/ObjectUtilities';
import {MemberModel} from '../../Actions/Models/MemberModel';
import {MemberTypes} from '../../Actions/Types/MemberTypes';


export default function MemberReducer(state=[],action){

    switch (action.type){
        case MemberTypes.MEMBER_LOAD_SUCCESS:

            let data = SafeCopy(action.data);

            data.map((item) =>{

                let firstName = item[MemberModel.p_FirstName.name];
                let lastName = item[MemberModel.p_LastName.name];

                item[MemberModel.p_MemberFullName.value] = `${firstName} ${lastName}`;

            });


            return reducerUtilities.createReturnObject(
                action.type,
                data
            );

            break;

        default:
            return state;
    }

}