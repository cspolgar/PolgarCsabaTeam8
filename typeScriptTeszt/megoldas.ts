function DiakInfo(nev:string, csoport: number, tipus:boolean):string
{
if(tipus=true)
{
    return nev+ " [Team0"+csoport+"] Junior Frontend";
}
    return nev+ " [Team0"+csoport+"] Webfejlesztő";
    
}

function SzovegesErtekeles(jegy:number):[string,string]
{
    if(jegy==5)
    {

        return ["Példás", "Példás"]

    }
    else if (jegy==4)
    {
        return ["Jó", "Jó"]

    }
    else if (jegy==3)
    {
        return ["Változó", "Váltózó"]

    }
    else if (jegy==2)
    {
        return ["Rossz", "Hanyag"]
    }


}

function HarommalOszthatokSzama(tomb:Array<number>):number
{

    let oszhatoszam:number=0;
    for(let i=0;i<tomb.length;i++)
    {

        if(tomb[i]%3==0)
        {
            oszhatoszam++;

        }

    }
return oszhatoszam;

}

function Nyeroszamok(mennyiseg:number,alsoHatar:number,felsoHatar:number):Array<number>{

    let i:number=0;
    let nyeroSzamok:Array<number>=[];
    while(i>mennyiseg)
    {
        let nyeroSzam:number=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
        let szerepelE:boolean=false;
        for(let j=0;i<nyeroSzamok.length;i++)
        {

            if(nyeroSzamok[j]==nyeroSzam)
            {

                szerepelE=true;

            }


        }

        if(szerepelE==false)
        {
            nyeroSzamok.push(nyeroSzam);
            i++;


        }


    }

return nyeroSzamok;
}