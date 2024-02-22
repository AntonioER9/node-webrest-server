export class CreateTodoDto {
    
    private constructor(
        public readonly text: string,
    ){}

    static create( props: {[key:string]: any}): [string?, CreateTodoDto?] { //Otra forma de validación de campos alternativa a express-validator

        const { text } = props;

        if ( !text || text.length === 0) return ['Text property is required', undefined];

        return [undefined, new CreateTodoDto(text)];
    }

}