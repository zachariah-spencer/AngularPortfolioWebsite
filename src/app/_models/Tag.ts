export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'pink');
    static readonly GDSCRIPT = new Tag('GDScript', 'orchid');
    static readonly CPLUSPLUS = new Tag('C++', 'tan');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly NODEJS = new Tag('Node.js', 'rosybrown');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'steelblue');


    private constructor(private readonly key: string, public readonly color: string) {
        
    }

    toString() {
        return this.key;
    }
}