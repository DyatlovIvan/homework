import {sum} from "./01";

test('sum shoould be correct'() =>{
    const a =1;
    const b =1;
    const c =1;

    const  result = sum(a,b);

    expect(result).toBe(3);
})