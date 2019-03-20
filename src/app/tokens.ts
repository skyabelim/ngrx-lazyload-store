import { InjectionToken } from '@angular/core'
// import * as reducers from '../app/store/reducers'
import { State } from '@ngrx/store'

// export const STATE_CB = new InjectionToken('Provide the state CB injection')

export function getInitialState() {
    if (typeof window !== 'undefined') {
        
        let state: State<any>

        // try {
        //     window['__STATE__'] = state.getValue();
        // } catch(error) {
        //     console.log("err: ", error)
        // }

        window['__STATE__'] = state.getValue();
        return window['__STATE__']
    } else {
        return { error: 'window not defined' }
    }
}
