let result = [];

for( var i = 0; i < 10; i++)
{
    (
        function () {
            let j = i;
            result.push(
                function(){
                    console.log(
                        {
                            index : j
                        }
                    )
                }
            )
        }
    )
    (i)
}

let container = [];

for( var i = 0; i < 10; i++)
{
    (function(){
        let j = i;
        container.push(function(){
            console.log(
                {
                    number: j * 213123123 / 23
                }
            )
        })
    })()
}

result[8]();
container[4]();
