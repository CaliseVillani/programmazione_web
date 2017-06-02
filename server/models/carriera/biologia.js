var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

var BiologiaSchema = new Schema({
    
   
    account_id:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    molecular_biology:{
        voto:{
            type:Number,
        },
        data:{
            type:String,
        },
        cfu:{
            type:Number,default:12,
        },
        anno:{
            type:Number,default:2,
            
        }
    },
    analisi:{
        voto:{
            type:Number,
        },
        data:{
            type:String,
        },
        cfu:{
            type:Number,default:12,
        },
        anno:{
            type:Number,default:1,
            
        }
    },
    zoologia:{
        voto:{
            type:Number,
        },
        data:{
            type:String,
        },
        cfu:{
            type:Number,default:6,
        },
        anno:{
            type:Number,default:2,
            
        }
    },
    botanica:{
        voto:{
            type:Number,
        },
        data:{
            type:String,
        },
        cfu:{
            type:Number,default:6,
        },
        anno:{
            type:Number,default:2,
            
        }
    },
    computer_science:{
        voto:{
            type:Number,
        },
        data:{
            type:String,
        },
        cfu:{
            type:Number,default:6,
        },
        anno:{
            type:Number,default:2,
            
        }
    }

});
 
module.exports = mongoose.model('Biologia', BiologiaSchema);