class Square{

    constructor(xCoord,yCoord,objectHeight,objectWidth, mainColor)
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectHeight = objectHeight;
        this.objectWidth = objectWidth;
        this.mainColor = mainColor;
    }

    get x()
    {
        return this.xCoord;
    }

    set x(value)
    {
        this.xCoord = value;
    }
    get y()
    {
        return this.yCoord;
    }
    set y(value)
    {
        this.yCoord = value;
    }

    get h()
    {
        return this.objectHeight;
    }

    get w()
    {
        return this.objectWidth;
    }

    get color()
    {
        return this.mainColor;
    }
}
