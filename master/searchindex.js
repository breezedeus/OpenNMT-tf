Search.setIndex({docnames:["README","configuration","data","index","package/modules","package/opennmt","package/opennmt.config","package/opennmt.constants","package/opennmt.decoders","package/opennmt.decoders.decoder","package/opennmt.decoders.rnn_decoder","package/opennmt.decoders.self_attention_decoder","package/opennmt.encoders","package/opennmt.encoders.conv_encoder","package/opennmt.encoders.encoder","package/opennmt.encoders.mean_encoder","package/opennmt.encoders.rnn_encoder","package/opennmt.encoders.self_attention_encoder","package/opennmt.inputters","package/opennmt.inputters.inputter","package/opennmt.inputters.record_inputter","package/opennmt.inputters.text_inputter","package/opennmt.models","package/opennmt.models.model","package/opennmt.models.sequence_classifier","package/opennmt.models.sequence_tagger","package/opennmt.models.sequence_to_sequence","package/opennmt.models.transformer","package/opennmt.tokenizers","package/opennmt.tokenizers.tokenizer","package/opennmt.utils","package/opennmt.utils.beam_search","package/opennmt.utils.bridge","package/opennmt.utils.cell","package/opennmt.utils.decay","package/opennmt.utils.hooks","package/opennmt.utils.losses","package/opennmt.utils.misc","package/opennmt.utils.position","package/opennmt.utils.reducer","package/opennmt.utils.transformer","package/opennmt.utils.vocab","serving","training"],envversion:53,filenames:["README.md","configuration.md","data.md","index.rst","package/modules.rst","package/opennmt.rst","package/opennmt.config.rst","package/opennmt.constants.rst","package/opennmt.decoders.rst","package/opennmt.decoders.decoder.rst","package/opennmt.decoders.rnn_decoder.rst","package/opennmt.decoders.self_attention_decoder.rst","package/opennmt.encoders.rst","package/opennmt.encoders.conv_encoder.rst","package/opennmt.encoders.encoder.rst","package/opennmt.encoders.mean_encoder.rst","package/opennmt.encoders.rnn_encoder.rst","package/opennmt.encoders.self_attention_encoder.rst","package/opennmt.inputters.rst","package/opennmt.inputters.inputter.rst","package/opennmt.inputters.record_inputter.rst","package/opennmt.inputters.text_inputter.rst","package/opennmt.models.rst","package/opennmt.models.model.rst","package/opennmt.models.sequence_classifier.rst","package/opennmt.models.sequence_tagger.rst","package/opennmt.models.sequence_to_sequence.rst","package/opennmt.models.transformer.rst","package/opennmt.tokenizers.rst","package/opennmt.tokenizers.tokenizer.rst","package/opennmt.utils.rst","package/opennmt.utils.beam_search.rst","package/opennmt.utils.bridge.rst","package/opennmt.utils.cell.rst","package/opennmt.utils.decay.rst","package/opennmt.utils.hooks.rst","package/opennmt.utils.losses.rst","package/opennmt.utils.misc.rst","package/opennmt.utils.position.rst","package/opennmt.utils.reducer.rst","package/opennmt.utils.transformer.rst","package/opennmt.utils.vocab.rst","serving.md","training.md"],objects:{"":{opennmt:[5,0,0,"-"]},"opennmt.config":{load_config:[6,1,1,""],load_model_module:[6,1,1,""]},"opennmt.decoders":{decoder:[9,0,0,"-"],rnn_decoder:[10,0,0,"-"],self_attention_decoder:[11,0,0,"-"]},"opennmt.decoders.decoder":{Decoder:[9,2,1,""],get_embedding_fn:[9,1,1,""],get_sampling_probability:[9,1,1,""],logits_to_cum_log_probs:[9,1,1,""]},"opennmt.decoders.decoder.Decoder":{decode:[9,3,1,""],dynamic_decode:[9,3,1,""],dynamic_decode_and_search:[9,3,1,""]},"opennmt.decoders.rnn_decoder":{AttentionalRNNDecoder:[10,2,1,""],MultiAttentionalRNNDecoder:[10,2,1,""],RNNDecoder:[10,2,1,""]},"opennmt.decoders.rnn_decoder.AttentionalRNNDecoder":{__init__:[10,3,1,""]},"opennmt.decoders.rnn_decoder.MultiAttentionalRNNDecoder":{__init__:[10,3,1,""]},"opennmt.decoders.rnn_decoder.RNNDecoder":{__init__:[10,3,1,""],decode:[10,3,1,""],dynamic_decode:[10,3,1,""],dynamic_decode_and_search:[10,3,1,""]},"opennmt.decoders.self_attention_decoder":{SelfAttentionDecoder:[11,2,1,""]},"opennmt.decoders.self_attention_decoder.SelfAttentionDecoder":{__init__:[11,3,1,""],decode:[11,3,1,""],dynamic_decode:[11,3,1,""],dynamic_decode_and_search:[11,3,1,""]},"opennmt.encoders":{conv_encoder:[13,0,0,"-"],encoder:[14,0,0,"-"],mean_encoder:[15,0,0,"-"],rnn_encoder:[16,0,0,"-"],self_attention_encoder:[17,0,0,"-"]},"opennmt.encoders.conv_encoder":{ConvEncoder:[13,2,1,""]},"opennmt.encoders.conv_encoder.ConvEncoder":{__init__:[13,3,1,""],encode:[13,3,1,""]},"opennmt.encoders.encoder":{Encoder:[14,2,1,""],ParallelEncoder:[14,2,1,""],SequentialEncoder:[14,2,1,""]},"opennmt.encoders.encoder.Encoder":{encode:[14,3,1,""]},"opennmt.encoders.encoder.ParallelEncoder":{__init__:[14,3,1,""],encode:[14,3,1,""]},"opennmt.encoders.encoder.SequentialEncoder":{__init__:[14,3,1,""],encode:[14,3,1,""]},"opennmt.encoders.mean_encoder":{MeanEncoder:[15,2,1,""]},"opennmt.encoders.mean_encoder.MeanEncoder":{encode:[15,3,1,""]},"opennmt.encoders.rnn_encoder":{BidirectionalRNNEncoder:[16,2,1,""],GoogleRNNEncoder:[16,2,1,""],PyramidalRNNEncoder:[16,2,1,""],RNNEncoder:[16,2,1,""],UnidirectionalRNNEncoder:[16,2,1,""]},"opennmt.encoders.rnn_encoder.BidirectionalRNNEncoder":{__init__:[16,3,1,""],encode:[16,3,1,""]},"opennmt.encoders.rnn_encoder.GoogleRNNEncoder":{__init__:[16,3,1,""],encode:[16,3,1,""]},"opennmt.encoders.rnn_encoder.PyramidalRNNEncoder":{__init__:[16,3,1,""],encode:[16,3,1,""]},"opennmt.encoders.rnn_encoder.RNNEncoder":{__init__:[16,3,1,""],encode:[16,3,1,""]},"opennmt.encoders.rnn_encoder.UnidirectionalRNNEncoder":{__init__:[16,3,1,""],encode:[16,3,1,""]},"opennmt.encoders.self_attention_encoder":{SelfAttentionEncoder:[17,2,1,""]},"opennmt.encoders.self_attention_encoder.SelfAttentionEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.inputters":{inputter:[19,0,0,"-"],record_inputter:[20,0,0,"-"],text_inputter:[21,0,0,"-"]},"opennmt.inputters.inputter":{Inputter:[19,2,1,""],MixedInputter:[19,2,1,""],MultiInputter:[19,2,1,""],ParallelInputter:[19,2,1,""]},"opennmt.inputters.inputter.Inputter":{add_process_hooks:[19,3,1,""],get_length:[19,3,1,""],get_serving_input_receiver:[19,3,1,""],initialize:[19,3,1,""],make_dataset:[19,3,1,""],process:[19,3,1,""],remove_data_field:[19,3,1,""],set_data_field:[19,3,1,""],transform:[19,3,1,""],transform_data:[19,3,1,""],visualize:[19,3,1,""]},"opennmt.inputters.inputter.MixedInputter":{__init__:[19,3,1,""],get_length:[19,3,1,""],make_dataset:[19,3,1,""],transform:[19,3,1,""]},"opennmt.inputters.inputter.MultiInputter":{initialize:[19,3,1,""],make_dataset:[19,3,1,""],transform:[19,3,1,""],visualize:[19,3,1,""]},"opennmt.inputters.inputter.ParallelInputter":{__init__:[19,3,1,""],get_length:[19,3,1,""],make_dataset:[19,3,1,""],transform:[19,3,1,""]},"opennmt.inputters.record_inputter":{SequenceRecordInputter:[20,2,1,""]},"opennmt.inputters.record_inputter.SequenceRecordInputter":{__init__:[20,3,1,""],get_length:[20,3,1,""],initialize:[20,3,1,""],make_dataset:[20,3,1,""],transform:[20,3,1,""]},"opennmt.inputters.text_inputter":{CharConvEmbedder:[21,2,1,""],TextInputter:[21,2,1,""],WordEmbedder:[21,2,1,""],load_pretrained_embeddings:[21,1,1,""],tokens_to_chars:[21,1,1,""],visualize_embeddings:[21,1,1,""]},"opennmt.inputters.text_inputter.CharConvEmbedder":{__init__:[21,3,1,""],initialize:[21,3,1,""],transform:[21,3,1,""],visualize:[21,3,1,""]},"opennmt.inputters.text_inputter.TextInputter":{get_length:[21,3,1,""],initialize:[21,3,1,""],make_dataset:[21,3,1,""],transform:[21,3,1,""]},"opennmt.inputters.text_inputter.WordEmbedder":{__init__:[21,3,1,""],initialize:[21,3,1,""],transform:[21,3,1,""],visualize:[21,3,1,""]},"opennmt.models":{model:[23,0,0,"-"],sequence_classifier:[24,0,0,"-"],sequence_tagger:[25,0,0,"-"],sequence_to_sequence:[26,0,0,"-"],transformer:[27,0,0,"-"]},"opennmt.models.model":{Model:[23,2,1,""],get_optimizer_class:[23,1,1,""],learning_rate_decay_fn:[23,1,1,""]},"opennmt.models.model.Model":{__call__:[23,3,1,""],input_fn:[23,3,1,""],print_prediction:[23,3,1,""],serving_input_fn:[23,3,1,""]},"opennmt.models.sequence_classifier":{SequenceClassifier:[24,2,1,""]},"opennmt.models.sequence_classifier.SequenceClassifier":{__init__:[24,3,1,""],print_prediction:[24,3,1,""]},"opennmt.models.sequence_tagger":{SequenceTagger:[25,2,1,""],flag_bioes_tags:[25,1,1,""]},"opennmt.models.sequence_tagger.SequenceTagger":{__init__:[25,3,1,""],print_prediction:[25,3,1,""]},"opennmt.models.sequence_to_sequence":{SequenceToSequence:[26,2,1,""],shift_target_sequence:[26,1,1,""]},"opennmt.models.sequence_to_sequence.SequenceToSequence":{__init__:[26,3,1,""],print_prediction:[26,3,1,""]},"opennmt.models.transformer":{Transformer:[27,2,1,""]},"opennmt.models.transformer.Transformer":{__init__:[27,3,1,""]},"opennmt.tokenizers":{tokenizer:[29,0,0,"-"]},"opennmt.tokenizers.tokenizer":{CharacterTokenizer:[29,2,1,""],SpaceTokenizer:[29,2,1,""],Tokenizer:[29,2,1,""]},"opennmt.tokenizers.tokenizer.Tokenizer":{__call__:[29,3,1,""],initialize:[29,3,1,""]},"opennmt.utils":{beam_search:[31,0,0,"-"],bridge:[32,0,0,"-"],cell:[33,0,0,"-"],decay:[34,0,0,"-"],hooks:[35,0,0,"-"],losses:[36,0,0,"-"],misc:[37,0,0,"-"],position:[38,0,0,"-"],reducer:[39,0,0,"-"],transformer:[40,0,0,"-"],vocab:[41,0,0,"-"]},"opennmt.utils.beam_search":{beam_search:[31,1,1,""],compute_batch_indices:[31,1,1,""],compute_topk_scores_and_seq:[31,1,1,""]},"opennmt.utils.bridge":{Bridge:[32,2,1,""],CopyBridge:[32,2,1,""],DenseBridge:[32,2,1,""],ZeroBridge:[32,2,1,""],assert_state_is_compatible:[32,1,1,""]},"opennmt.utils.bridge.Bridge":{__call__:[32,3,1,""]},"opennmt.utils.bridge.DenseBridge":{__init__:[32,3,1,""]},"opennmt.utils.cell":{build_cell:[33,1,1,""]},"opennmt.utils.decay":{noam_decay:[34,1,1,""]},"opennmt.utils.hooks":{CountersHook:[35,2,1,""],LogParametersCountHook:[35,2,1,""],SaveEvaluationPredictionHook:[35,2,1,""]},"opennmt.utils.hooks.CountersHook":{after_run:[35,3,1,""],before_run:[35,3,1,""],begin:[35,3,1,""]},"opennmt.utils.hooks.LogParametersCountHook":{begin:[35,3,1,""]},"opennmt.utils.hooks.SaveEvaluationPredictionHook":{__init__:[35,3,1,""],after_run:[35,3,1,""],before_run:[35,3,1,""],begin:[35,3,1,""],end:[35,3,1,""]},"opennmt.utils.losses":{masked_sequence_loss:[36,1,1,""]},"opennmt.utils.misc":{add_dict_to_collection:[37,1,1,""],count_lines:[37,1,1,""],count_parameters:[37,1,1,""],extract_batches:[37,1,1,""],extract_prefixed_keys:[37,1,1,""],get_classnames_in_module:[37,1,1,""],get_dict_from_collection:[37,1,1,""],item_or_tuple:[37,1,1,""],print_bytes:[37,1,1,""]},"opennmt.utils.position":{PositionEmbedder:[38,2,1,""],PositionEncoder:[38,2,1,""],make_positions:[38,1,1,""]},"opennmt.utils.position.PositionEmbedder":{__init__:[38,3,1,""],encode:[38,3,1,""]},"opennmt.utils.position.PositionEncoder":{__call__:[38,3,1,""],apply:[38,3,1,""],encode:[38,3,1,""]},"opennmt.utils.reducer":{ConcatReducer:[39,2,1,""],JoinReducer:[39,2,1,""],MultiplyReducer:[39,2,1,""],Reducer:[39,2,1,""],SumReducer:[39,2,1,""],pad_in_time:[39,1,1,""],pad_n_with_identity:[39,1,1,""],pad_with_identity:[39,1,1,""],roll_sequence:[39,1,1,""]},"opennmt.utils.reducer.ConcatReducer":{reduce:[39,3,1,""],reduce_sequence:[39,3,1,""]},"opennmt.utils.reducer.JoinReducer":{reduce:[39,3,1,""],reduce_sequence:[39,3,1,""]},"opennmt.utils.reducer.MultiplyReducer":{reduce:[39,3,1,""],reduce_sequence:[39,3,1,""]},"opennmt.utils.reducer.Reducer":{reduce:[39,3,1,""],reduce_sequence:[39,3,1,""],zip_and_reduce:[39,3,1,""]},"opennmt.utils.reducer.SumReducer":{reduce:[39,3,1,""],reduce_sequence:[39,3,1,""]},"opennmt.utils.transformer":{drop_and_add:[40,1,1,""],feed_forward:[40,1,1,""],multi_head_attention:[40,1,1,""],norm:[40,1,1,""],scaled_dot_attention:[40,1,1,""]},"opennmt.utils.vocab":{Vocab:[41,2,1,""]},"opennmt.utils.vocab.Vocab":{__init__:[41,3,1,""],add:[41,3,1,""],add_from_text:[41,3,1,""],lookup:[41,3,1,""],prune:[41,3,1,""],serialize:[41,3,1,""],size:[41,4,1,""]},opennmt:{config:[6,0,0,"-"],constants:[7,0,0,"-"],decoders:[8,0,0,"-"],encoders:[12,0,0,"-"],inputters:[18,0,0,"-"],models:[22,0,0,"-"],tokenizers:[28,0,0,"-"],utils:[30,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"abstract":21,"byte":37,"case":21,"class":[9,10,11,13,14,15,16,17,19,20,21,23,24,25,26,27,29,32,33,35,38,39,41],"default":[1,31,32,41],"export":[19,23,42],"final":31,"function":[6,9,19,21,23,25,31,32,33,34,37,39,40,42],"int":31,"new":[31,41],"null":2,"return":[6,9,10,14,16,19,21,23,25,26,29,31,32,33,34,36,37,38,39,40,41],"static":[20,39],"true":[10,16,21,23,25,33,36,39],"void":2,"while":31,EOS:31,For:[1,2,19,25,43],Ids:31,THE:21,The:[1,2,6,9,10,11,13,14,16,17,19,20,21,23,24,25,26,27,29,31,32,33,34,35,36,37,38,39,40,41,43],Then:43,These:31,Yes:2,__call__:[23,29,32,38],__init__:[10,11,13,14,16,17,19,20,21,24,25,26,27,32,35,38,41],_topk_:31,_topk_flag:31,_topk_scor:31,_topk_seq:31,about:[1,2,21,23,31],abs:[9,11,13,16,17,27,31,34,40],accept:[1,2],accordingli:[2,34],activ:[11,17,19,21,27,32,43],adam_with_decai:1,add:[1,10,19,25,31,33,37,40,41],add_dict_to_collect:37,add_from_text:41,add_process_hook:19,add_to_collect:29,added:[0,10,16,19,26,33],addit:[19,21,23,25,29],addition:[10,26],advanc:[2,3],aerob:2,after:[10,16,19,23,25,31,33],after_run:35,against:21,align:[2,21,25],aliv:31,all:[2,14,19,37,39,42],allow:1,alpha:31,also:[2,19,43],altern:10,ani:[21,29],antich:2,api:42,apidoc:0,apo:2,appli:[11,13,17,19,21,23,27,32,38],arbitrarili:1,architectur:1,argument:[10,16,23,33,34,35],ark:2,ark_to_record:2,arrai:[21,25,37],arxiv:[9,11,13,16,17,27,31,34,40],assert:32,assert_state_is_compat:32,asset:[29,42],asset_filepath:29,assign:[19,21],associ:[21,41],assum:[19,21,38],assumpt:31,asynchron:43,attach:21,attend:[10,40],attent:[1,10,11,17,27,33,40],attention_dropout:[11,17,27],attention_lay:[10,33],attention_mechan:33,attention_mechanism_class:10,attention_wrapp:10,attentionalrnndecod:10,attentionmechan:[10,33],automat:[0,42],avail:[1,42],axi:39,base:[9,10,11,13,14,15,16,17,19,20,21,23,24,25,26,27,29,31,32,35,38,39,41],basic:10,batch:[23,31,37,39],batch_po:31,batch_siz:[23,31,39],beam:[9,31],beam_search:[5,30],beam_siz:31,beam_width:[9,10,11],beat:2,becaus:[31,42],been:[2,25],before_run:35,begin:35,behavior:21,being:31,beyond:2,bidirect:16,bidirectionalrnnencod:16,bin:[1,2,43],bioe:25,bool:31,both:[16,26],bpe:29,bridg:[5,10,30],bucket:23,budget:2,buffer:23,buffer_s:23,build:[33,36,38],build_cel:33,bureaucraci:2,calcul:40,call:[19,37],callabl:[9,10,16,19,23,32,33,35,41],came:2,can:[1,2,10,19,23,28,31,42],capac:2,captur:31,case_insensitive_embed:21,categor:9,cell:[5,10,16,30],cell_class:[10,16,33],chang:34,charact:[1,21,29],charactertoken:29,charconvembedd:21,checkpoint:43,chief:43,chief_host:43,chunk:25,classifi:24,classnam:[23,37],client:31,cloth:2,code:[0,1],collabor:2,collect:[19,29,37],collection_nam:37,combin:39,command:[1,43],common:[2,16],compat:32,complet:31,complex:1,comput:[25,31,40,43],compute_batch_indic:31,compute_topk_scores_and_seq:31,concaten:[39,40],concatreduc:[14,16,19,39],config:[1,4,5,23],config_path:6,configur:[2,3,6,9,20,21,24,25],constant:[4,5,9,34],constrain:23,construct:10,constructor:16,contain:[1,19,20,21,23,24,25,26,29,31,39,42],content:2,context:40,contrib:[10,23,33],contribut:1,conv_encod:[5,12],convencod:13,conveni:33,converg:9,convert:2,convolut:[1,13,21],coodin:31,coordin:31,copi:35,copybridg:32,correctli:25,correspond:14,could:25,count_lin:37,count_paramet:37,counter:35,countershook:35,cpp:42,creat:[2,19,23,31,38,41],crf:25,crf_decod:25,cuda_visible_devic:43,cumul:9,current:[0,19,25,26,27,31,34,35,43],custom:[2,35],data:[1,3,18,19,20,21,24,25,26,27,42,43],data_fil:[19,20,21],dataset:19,decai:[5,23,30],decay_r:[23,34],decay_step:[23,34],decay_typ:23,decayed_learning_r:23,decod:[4,5,26,31,32,37,43],decode_length:31,decoded_id:31,decoder_zero_st:32,defin:[1,2,6,7,8,10,11,12,13,15,16,17,18,19,20,21,22,27,28,29,30,32,34,36,38,39,40],definit:42,deliv:2,densebridg:32,depend:[19,37,38],depth:[2,20,39],describ:[1,2,9,11,13,16,17,23,27,34,40],design:1,detail:[21,23,43],dict:[26,31,37],dict_:37,dictionari:[6,19,23,26,29,37],differ:31,dimens:[16,21,27,34,38,39],dir:42,direct:16,directli:9,directori:[19,21,42,43],disk:[41,42],displai:[2,43],divis:16,doc:0,docker:43,document:[3,43],doe:32,dot:40,down:2,drop:[10,11,13,16,17,19,21,27,33,40],drop_and_add:40,dropout:[10,11,13,16,17,19,21,27,33,40],duplic:[1,2],dure:[9,42,43],dynam:[1,9,26],dynamic_decod:[9,10,11],dynamic_decode_and_search:[9,10,11],each:[9,10,14,16,20,21,25,27,31,33,36,37,38,39,40,41,43],easi:31,economi:2,ecosystem:43,element:[23,37,39],emb:38,embed:[1,9,10,11,18,19,21,43],embedd:21,embedding_fil:21,embedding_file_kei:21,embedding_file_with_head:21,embedding_s:21,embedding_var:21,empti:6,encod:[1,4,5,10,24,25,26,32,37,38],encoder_st:32,end:[1,2,9,26,31,35,42],end_token:[9,10,11],entri:[21,41],environ:42,eos_id:31,equal:31,estim:[9,14,19,23,33,40,43],etc:[1,25,43],european:2,evalu:[9,23,25,35,43],everi:14,every_n_sec:35,every_n_step:35,exampl:[1,2,19,23,42],execut:14,expand:31,expect:[2,20,42],expected_st:32,expos:37,extent:2,extern:[29,42],extract_batch:37,extract_prefixed_kei:37,factor:16,fals:[10,16,21,25,33,34,40],fashion:23,feat1:2,featm:2,featur:23,features_fil:23,feder:2,feed:[11,17,27,40],feed_forward:40,ffn_inner_dim:[11,17,27],field:[19,20],file:[0,1,2,6,19,20,21,23,24,25,35,37,41,42],filenam:[29,35,37,41],fill:[6,41],filter:13,finish:31,first:[31,38,43],fit:2,flag:[25,31],flag_bioes_tag:25,flatten:20,float32:20,follow:[20,21],format:[21,23],forward:[11,17,19,27,40],found:[21,41],framework:43,freedom:1,frequenc:41,from:[0,1,2,9,10,11,13,17,18,20,21,23,27,31,32,35,37,40,41],full:[9,31],fund:2,futur:40,gather:[19,31],gener:[2,14,19,21,31,37],get:37,get_classnames_in_modul:37,get_dict_from_collect:37,get_embedding_fn:9,get_length:[19,20,21],get_optimizer_class:23,get_sampling_prob:9,get_serving_input_receiv:19,given:[19,26,31],global_step:[9,23,34],gnmt:16,goal:2,gold:25,gold_flag:25,googl:[27,40],googlernnencod:16,gpu:43,gradient:43,graph:[19,21,28,37,42,43],graphkei:29,greater:38,greedi:9,group:2,grow:31,grow_al:31,grow_finish:31,gym:2,hand:31,has:[1,2,20,25,31],have:[2,19,21,31,33,38],head:[2,11,17,27,40],help:2,helper:[33,39],here:31,high:1,hook:[5,19,30],host:43,html:0,http:[9,11,13,16,17,27,31,34,40],ident:39,identifi:[2,25,41],identity_valu:39,ids:[9,26,31],ids_out:26,ignor:[21,25,34],implement:[1,2,18,31,35,40],implemet:31,impos:10,includ:[21,43],incompat:32,incorrectli:25,increas:[26,41],index:[2,31,38,41,42],infer:[1,9,10,11,42],inform:[32,42,43],inherit:[10,23],initi:[9,10,11,13,14,16,17,19,20,21,24,25,26,27,29,32,35,38,41],initial_id:31,initial_st:[9,10,11],inner:[10,11,16,17,27,33,40],inner_dim:40,input:[1,9,10,11,13,14,15,16,17,18,19,20,21,23,24,25,26,27,33,38,39,40,42],input_depth_kei:20,input_dim:38,input_fn:23,inputt:[1,2,4,5,24,25,26,27],insensit:21,inspect:42,inspir:31,instanc:[1,16,43],instead:9,instructor:2,int64:20,integ:[10,33],integr:43,interfac:31,introspect:31,invalid:9,italian:2,item:31,item_or_tupl:37,iter:[9,21,37],its:[10,14,15,16,33,37,39,41],join:39,joinreduc:[14,39],kei:[1,2,19,20,21,24,25,26,37,40],kernel:13,kernel_s:[13,21],kill:2,know:42,known:[9,20],kubernet:43,label:[21,23,24,25,36],labels_fil:23,labels_vocabulary_file_kei:[24,25],laid:2,last:10,latest:42,layer:[10,11,13,16,17,25,27,33,40],learn:[1,23,34,43],learning_r:[23,34],learning_rate_decay_fn:23,legisl:2,length:[9,14,19,20,21,23,25,26,31,33,38,39,40],length_penalti:[9,10,11],level:1,like:[31,42,43],line:[1,2,18,21,24,25,37,41,43],linear:[9,11,17,32,40],list:[6,10,14,19,20,21,23,29,33,37,39,41,43],load:[6,29,41],load_config:6,load_model_modul:6,load_pretrained_embed:21,localhost:43,log:[9,19,21,31,35,43],log_dir:[19,21],log_prob:[9,31],logdir:43,logic:[18,32],logit:[9,31,36],logits_to_cum_log_prob:9,logparameterscounthook:35,look:42,lookup:[19,38,41],loop:43,loss:[5,30,43],lowercas:21,lstmcell:[10,16,33],luongattent:10,machin:43,made:[1,2],mai:31,main:[1,43],maintain:32,make:[0,31],make_dataset:[19,20,21],make_posit:38,manag:43,mani:[2,23],manual:42,mark:31,mask:[36,40],mask_futur:40,masked_sequence_loss:36,master:2,match:[21,25],max:39,max_sequence_length:39,max_siz:41,max_word_length:21,maximum:[9,23,38,41],maximum_features_length:23,maximum_iter:[9,10,11],maximum_labels_length:23,maximum_posit:38,mean:[2,15,21],mean_encod:[5,12],meanencod:15,mechan:10,memori:[9,10,11],memory_sequence_length:[9,10,11],merg:[14,16,19,38,39],meta:21,metadata:[19,20,21,23,29],method:[19,31],metric:25,min_frequ:41,minim:15,minimum:41,minimum_learning_r:23,misc:[5,30],miss:25,mix:[1,19],mixedinputt:[1,19],modal:1,mode:[9,10,11,13,14,15,16,17,19,20,21,23,33,40],modekei:[9,14,19,23,33,40],model:[2,4,5,6,19,29,31,34,35,40,42],model_fn:23,modul:[1,4,5,8,12,18,22,28,30],more:[1,23,43],mostli:35,multi:[1,10,11,14,17,19,33,40],multi_head_attent:40,multiattentionalrnndecod:10,multiinputt:19,multipl:[1,10,14,19],multipli:39,multiplyreduc:39,must:[9,21,31,32,39],name:[2,23,24,25,26,27,31,34,37],nation:2,need:[31,42],neg:25,neither:21,nest:[9,19,31,39],newlin:2,next:[23,31],noam_decai:34,node:42,non:6,none:[6,9,10,11,13,14,15,16,17,19,21,23,24,25,26,31,32,33,34,35,37,38,40,41],nor:21,norm:[40,43],normal:40,note:42,num_bucket:23,num_head:[11,17,27,40],num_lay:[10,11,13,16,17,27,33],num_oov_bucket:21,num_output:21,num_parallel_process_cal:23,num_unit:[10,13,16,33],number:[9,10,11,13,16,17,21,23,27,31,33,35,37,40,41],numpi:[21,25,37],object:[9,11,13,14,16,17,19,21,23,27,29,32,38,39,41],observ:31,off:31,offset:39,one:[10,19,21,24,25],onli:[0,10,25,26,27],open:43,opennmt:[0,1,2,3,42,43],oper:31,ops:[10,16,29,31,33],opt:23,optim:[1,21,23],option:[1,2,9,21,23,35],order:31,org:[9,11,13,16,17,27,31,34,40],other:[1,21,42],otherwis:[14,21,29],output:[9,10,11,13,14,16,17,21,23,26,27,31,33,35,37,40,42],output_dir:35,output_fil:35,outputs_reduc:14,over:13,overrid:10,packag:[0,3,4],pad:[19,31,38,39],pad_in_tim:39,pad_n_with_ident:39,pad_with_ident:39,padded_batch:19,padded_shap:19,padding_length:39,parallel:[19,23],parallelencod:[1,14],parallelinputt:[1,2,19],param:[23,24,25,26],paramet:[6,9,10,11,13,14,16,17,19,20,21,23,24,25,26,27,29,31,32,33,34,35,36,37,38,39,40,41,43],parameter:32,parliament:2,part:1,pass:[10,32],past:23,path:[6,21,41],pattern:31,pbtxt:21,penal:31,penalti:[9,31],per:[21,24,25],period:42,permit:31,person:2,pilat:2,pip:0,portal:3,pos:31,posit:[5,11,13,17,25,27,30,40],position_encod:[11,13,17,27],positionembedd:[11,13,17,27,38],positionencod:[11,13,17,27,38],possibl:[6,9,19,31,39],post_evaluation_fn:35,postur:2,precis:25,predefin:1,predict:[23,24,25,26,35],predicted_flag:25,predicted_id:9,prefetch:23,prefix:[2,26,31,37],prepar:[2,19,26],prerog:2,pretrain:21,previou:40,print:[23,37],print_byt:37,print_predict:[23,24,25,26],prioriti:1,probabl:[9,10,11,13,16,17,19,21,27,31,33,36,40,43],process:[19,21,23,24,25,26,27,31],produc:25,product:40,program:2,project:[7,37],projector_config:21,provid:[1,3,21,31,42],provis:2,prune:41,ps_host:43,purchas:2,purpos:2,py_func:42,pyramidalrnnencod:16,python:[0,1,2,6,10,16,29,33,35,41,42,43],queri:[9,40],quot:2,rais:[9,16,21,23,26,32,33],rate:[23,34,43],raw:[18,19],reach:31,read:[9,20,37],read_prob:9,realis:2,recal:25,receiv:19,recommonmark:0,record:[2,20,31],record_inputt:[5,18],reduc:[5,14,16,19,30,38],reduce_sequ:39,reduced_input:39,reduced_length:39,reduct:16,reduction_factor:16,refer:32,reflect:26,refus:2,regist:[21,29],rel:[6,21],relat:[1,6,40],relu:[11,17,27],relu_dropout:[11,17,27],remov:[0,19],remove_data_field:19,renam:0,replac:10,repres:31,requir:[19,31,42],reserv:38,residu:40,residual_connect:[10,16,33],resolv:23,respect:39,result:21,retain:39,reusabl:1,rightmost:1,rip:2,rnn:[1,10,16,33],rnn_cell_impl:[10,16,33],rnn_decod:[5,8],rnn_encod:[5,12],rnncell:33,rnndecod:10,rnnencod:16,roll_sequ:39,run:[0,31,42,43],run_context:35,run_valu:35,sai:[2,31],same:[14,19,33,38,39],sampl:[1,9,43],sampling_prob:[9,10,11],save:[16,35,41],saved_model:42,saved_model_cli:42,saveevaluationpredictionhook:35,scale:[2,34,40],scaled_dot_attent:40,schedul:9,schedule_typ:9,scheme:25,scor:31,score:[31,40],scores_to_gath:31,script:[2,41,42],seach:31,search:[9,31],see:[1,2,19,43],select:43,self:[1,11,17,27],self_attention_decod:[5,8],self_attention_encod:[5,12],selfattentiondecod:11,selfattentionencod:17,semant:34,senior:2,sentenc:[2,31,41],separ:[1,2],seq2seq:[10,26,33],seq:31,seq_length:31,seqclassifi:24,seqtagg:25,sequenc:[9,13,14,16,18,21,23,24,25,26,27,31,36,38,39,40],sequence_classifi:[5,22],sequence_length:[9,10,11,13,14,15,16,17,21,25,36,38,39],sequence_tagg:[5,22],sequence_to_sequ:[5,22,27],sequenceclassifi:24,sequencerecordinputt:[2,20],sequencetagg:25,sequencetosequ:[26,27],sequenti:[14,31],sequentialencod:[1,14],serial:[2,41,42],serv:[3,19,23],server:43,serving_default:42,serving_input_fn:23,servinginputreceiv:[19,23],session:35,session_run_hook:35,sessionrunhook:35,set:[1,2,9,19,21,23,29,32,37,38,43],set_data_field:19,setup:19,sever:[14,19,43],shape:[9,14,19,20,21,38,39,40],share:27,shell:43,shift:[26,39],shift_target_sequ:26,shortcut:38,shoud:31,should:[1,2,26,29,43],show:42,shuffl:23,signatur:[19,23],signature_def:42,similar:23,simpl:[10,15,16,19,21,35],simpli:43,simplifi:2,singl:[37,39],site:2,size:[9,13,21,23,31,32,36,41],sleep:2,soldier:2,some:[1,42],sourc:[1,2,6,9,10,11,13,14,15,16,17,19,20,21,23,24,25,26,27,29,31,32,33,34,35,36,37,38,39,40,41,43],source_inputt:[26,27],space:[2,21,29],spacetoken:[21,29],special:41,special_token:41,specif:19,speed:43,sphinx:0,sphinx_rtd_them:0,split:[21,29],src:[2,42],staircas:[23,34],standard:[26,29],start:[9,21,23,26,31,41,43],start_decay_step:23,start_token:[9,10,11],state:[2,9,10,14,16,31,32],states_reduc:14,states_to_gath:31,stdout:37,step:[9,23,31,34,35],stepcounterhook:35,stop:26,store:[23,31],str_as_byt:37,stream:[23,24,25,26,37],stretch:2,stride:21,string:[23,25,28,29,31,37,41],structur:[19,39],submodul:4,subpackag:4,suffix:[26,35],sum:39,summar:35,summari:43,summary_writ:35,sumreduc:[16,38,39],support:[25,26,27,42,43],sybmol:31,symbol:31,symbols_to_logits_fn:31,synchron:43,synergi:2,sys:37,tabl:[19,38],table_initi:19,tag:25,tag_set:42,tagger:25,tagging_schem:25,take:[9,10,15,16,31,33,35],target:[2,9,26,27],target_inputt:[26,27],task:43,task_index:43,task_typ:43,templat:1,tensor:[9,19,20,21,26,28,29,31,37,38,39,40],tensorboard:[21,43],tensorflow:[10,16,33,35,42,43],term:2,test:0,text:[18,21,29,41,42],text_inputt:[5,18,26,27],textinputt:[2,21],tfdbg:31,tfrecord:[2,20],tgt:42,than:38,thei:[1,2],them:2,thi:[2,3,10,19,21,23,24,25,26,27,31,35,37,38,42],thing:31,thoughout:7,three:31,throughout:37,time:[16,20,31,39],titl:2,toi:[1,2,42],token:[2,4,5,9,21,26,41,42],tokens_to_char:21,tokp_gathered_scor:31,told:2,top:31,topk:31,topk_finished_flag:31,topk_gathered_scor:31,topk_seq:31,total:37,train:[1,2,3,9,10,11,13,14,15,16,17,19,21,23,35,42],train_and_evalu:43,train_features_fil:2,train_source_1:2,train_source_2:2,train_source_3:2,trainabl:[21,35,37],trainer:2,transform:[5,11,17,18,19,20,21,22,28,30,32],transform_data:19,tupl:[9,14,25,31,37,39,40],two:2,txt:[2,42],type:[9,23,31,42],typeerror:[9,26],typic:42,unicod:[21,29],unidirectionalrnnencod:16,uniqu:31,unit:[10,11,13,16,17,19,21,27,33,40],unknown:21,unless:2,unscal:36,unused_data:19,updat:[19,26],url:43,usag:2,use:[0,23,31,37,40,42],used:[1,2,7,9,16,23,25,31,42],user:[1,19,23,29,43],uses:43,using:[1,2,10,11,16,17,31,42],usual:[9,19],util:[4,5,10,11,13,14,16,17,19,23,27],val1:21,val2:21,valm:21,valu:[1,7,9,19,20,23,31,37,38,39,40,41],valueerror:[9,16,21,23,32,33],values_length:40,variabl:[20,21,42],variant:21,variou:[30,37],vector:[18,21,40],version:41,view:37,visual:[19,21,31,43],visualize_embed:21,vocab:[5,30,31,42],vocab_s:[9,10,11,21,31],vocabulari:[9,21,24,25,41,42],vocabulary_fil:21,vocabulary_file_kei:21,vocabulary_s:21,warmup:34,watch:31,weight:[9,42],welcom:1,when:[2,9,16,23,25,31,42],where:[2,9,38,39,41],whether:31,which:[2,10,19,20,31,33,35,39],whose:2,width:9,window:21,with_head:21,within:19,word1:21,word2:21,word:[1,9,21,43],wordembedd:[21,26,27],wordn:21,work:28,worker:43,worker_host:43,wrapper:10,write:41,yaml:[1,2],yml:1,you:[2,42],your:[2,42],zerobridg:[10,32],zip:39,zip_and_reduc:39},titles:["Documentation","Configuration","Data","Overview","opennmt","opennmt package","opennmt.config module","opennmt.constants module","opennmt.decoders package","opennmt.decoders.decoder module","opennmt.decoders.rnn_decoder module","opennmt.decoders.self_attention_decoder module","opennmt.encoders package","opennmt.encoders.conv_encoder module","opennmt.encoders.encoder module","opennmt.encoders.mean_encoder module","opennmt.encoders.rnn_encoder module","opennmt.encoders.self_attention_encoder module","opennmt.inputters package","opennmt.inputters.inputter module","opennmt.inputters.record_inputter module","opennmt.inputters.text_inputter module","opennmt.models package","opennmt.models.model module","opennmt.models.sequence_classifier module","opennmt.models.sequence_tagger module","opennmt.models.sequence_to_sequence module","opennmt.models.transformer module","opennmt.tokenizers package","opennmt.tokenizers.tokenizer module","opennmt.utils package","opennmt.utils.beam_search module","opennmt.utils.bridge module","opennmt.utils.cell module","opennmt.utils.decay module","opennmt.utils.hooks module","opennmt.utils.losses module","opennmt.utils.misc module","opennmt.utils.position module","opennmt.utils.reducer module","opennmt.utils.transformer module","opennmt.utils.vocab module","Serving","Training"],titleterms:{autodoc:0,beam_search:31,bridg:32,build:0,cell:33,config:6,configur:1,constant:7,conv_encod:13,data:2,decai:34,decod:[8,9,10,11],depend:0,distribut:43,document:0,encod:[12,13,14,15,16,17],format:2,hook:35,input:2,inputt:[18,19,20,21],instal:0,local:0,loss:36,mean_encod:15,misc:37,model:[1,22,23,24,25,26,27],modul:[6,7,9,10,11,13,14,15,16,17,19,20,21,23,24,25,26,27,29,31,32,33,34,35,36,37,38,39,40,41],monitor:43,opennmt:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41],overview:3,packag:[5,8,12,18,22,28,30],parallel:2,paramet:1,posit:38,record_inputt:20,reduc:39,regist:0,rnn_decod:10,rnn_encod:16,self_attention_decod:11,self_attention_encod:17,sequence_classifi:24,sequence_tagg:25,sequence_to_sequ:26,serv:42,sourc:0,submodul:[5,8,12,18,22,28,30],subpackag:5,text:2,text_inputt:21,token:[28,29],train:43,transform:[27,40],util:[30,31,32,33,34,35,36,37,38,39,40,41],vector:2,vocab:41}})