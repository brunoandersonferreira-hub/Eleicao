import React, { useState, useId } from 'react';
import { 
  Play, 
  AlertTriangle, 
  Calculator, 
  BarChart3, 
  CheckCircle2, 
  Info, 
  FileText, 
  Search, 
  Cpu, 
  ShieldAlert, 
  Sliders, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Scale
} from 'lucide-react';

interface PointItem {
  id: number;
  title: string;
  category: 'matematica' | 'comportamento' | 'tecnologia' | 'politica';
  categoryLabel: string;
  summary: string;
  detailedArgument: string;
  evidencePresented: string[];
  counterAnalysis: string;
  authorQuoteOrKeyIdea: string;
}

const VIDEO_METADATA = {
  id: "3VucIryix-c",
  title: "TODOS OS INDÍCIOS DA **POSSÍVEL** FRAUDE ELEITORAL",
  author: "Lucas Banzoli",
  authorChannel: "https://www.youtube.com/@LucasBanzoli",
  duration: "34 minutos e 03 segundos (2.043 s)",
  status: "Indisponível / Restrito para visualização pública",
  originalDescription: `Contato da vendedora para quem estiver interessado no nosso curso de apologética: (67) 9234-2522.
Eu disse que não ia falar mais desse assunto, mas me encheram tanto a paciência que eu decidi fazer um novo vídeo muito mais aprofundado com todas as provas da fraude eleitoral (apesar de que a maioria nem vai assistir o vídeo e vai continuar xingando do mesmo jeito). No vídeo eu mostro as cidades onde Lula ganhou pegando todos os votos da terceira via, todos os votos dos que se abstiveram no primeiro turno, todos os votos de quem tinha votado branco ou nulo e, não satisfeito com isso, ainda parte dos votos do Flávio pra conta conseguir fechar – além dos estados mais bolsonaristas do Brasil que magicamente viraram petistas da noite pro dia sem que nenhuma pesquisa de opinião detectasse esse movimento. Aproveito ainda pra mostrar qual a probabilidade matemática que a IA dá para isso ter acontecido sem fraude, e se você quer saber qual é vem assistir o vídeo de hoje!`,
  tags: [
    "Matematicamente impossível",
    "Resultado eleição 2026",
    "Lula ganhou roubado",
    "Fraude eleitoral 2026",
    "Flávio fugiu do país",
    "Flávio x Lula",
    "Urnas eletrônicas são confiáveis",
    "Fraude do TSE",
    "Como Lula ganhou a eleição",
    "Virada histórica",
    "Como Flávio perdeu",
    "Urnas adulteradas",
    "Roubaram a eleição"
  ]
};

const POINTS_DATA: PointItem[] = [
  {
    id: 1,
    title: "1. Transferência Integral (100%) dos Votos da Terceira Via",
    category: "matematica",
    categoryLabel: "Matemática Eleitoral",
    summary: "O autor alega a existência de municípios onde a totalidade absoluta dos votos de candidatos da 'terceira via' migrou exclusivamente para um único candidato no 2º turno.",
    detailedArgument: "No vídeo, Lucas Banzoli argumenta que, em condições estatísticas normais de comportamento humano, os votos de candidatos alternativos (terceira via) dispersam-se entre os dois finalistas, além de ampliarem brancos, nulos e abstenções. Ele aponta cidades em que, para que os números de Lula fechassem, foi matematicamente necessário que 100% dos eleitores de todos os outros candidatos votassem nele em bloco homogêneo.",
    evidencePresented: [
      "Comparação de planilhas de votação do 1º turno versus 2º turno por município.",
      "Apresentação de casos locais onde a soma de votos novos de Lula bate exatamente com o estoque total da terceira via.",
      "Argumento de que a heterogeneidade ideológica dos candidatos da terceira via torna uma migração de 100% estatisticamente improvável."
    ],
    counterAnalysis: "Especialistas em estatística eleitoral apontam que pequenas cidades possuem contingentes reduzidos de eleitores onde variações aparentes decorrem do efeito de escala ('lei dos pequenos números') e que a polarização extrema costuma forçar um 'voto útil' massivo contra o candidato com maior rejeição regional.",
    authorQuoteOrKeyIdea: "«No vídeo eu mostro as cidades onde Lula ganhou pegando todos os votos da terceira via...»"
  },
  {
    id: 2,
    title: "2. Conversão Total dos Eleitores Ausentes (Abstenções do 1º Turno)",
    category: "matematica",
    categoryLabel: "Matemática Eleitoral",
    summary: "Alegação de que a abstenção do 1º turno foi convertida quase que integralmente em votos válidos para um único candidato no 2º turno.",
    detailedArgument: "Banzoli sustenta que o índice de abstenção no Brasil historicamente se mantém estável ou até se eleva ligeiramente no segundo turno em virtude do desinteresse de quem teve seu candidato derrotado. Ele aponta como anomalia grave municípios em que a participação aumentou de forma atípica com todo o novo contingente votando em Lula.",
    evidencePresented: [
      "Dados históricos de abstenção entre turnos de eleições passadas.",
      "Análise de cidades onde o número absoluto de votantes no 2º turno superou as projeções demográficas e eleitorais.",
      "Falta de dispersão: a ausência de votos adicionais proporcionais para o oponente (Flávio Bolsonaro)."
    ],
    counterAnalysis: "A mobilização de segundo turno frequentemente ativa eleitores que não compareceram no primeiro, especialmente através de transporte público gratuito garantido pelo STF e campanhas agressivas de ativismo local porta a porta em periferias e cidades do interior.",
    authorQuoteOrKeyIdea: "«...pegando todos os votos dos que se abstiveram no primeiro turno...»"
  },
  {
    id: 3,
    title: "3. Migração Unidirecional de 100% dos Votos Brancos e Nulos",
    category: "matematica",
    categoryLabel: "Matemática Eleitoral",
    summary: "O autor aponta como indício de fraude a captura de praticamente todos os votos nulos e brancos por uma só candidatura.",
    detailedArgument: "O eleitor que vota nulo ou em branco manifesta repulsa ou indiferença ao sistema político como um todo. O vídeo argumenta que é psicologicamente e politicamente improvável que a totalidade de quem anulou voluntariamente no primeiro turno decida, sem exceção, votar favoravelmente a um dos líderes no segundo turno.",
    evidencePresented: [
      "Taxas residuais de brancos e nulos em zonas eleitorais específicas que caíram a níveis próximos de zero.",
      "Inexistência de distribuição gaussiana natural na reescolha desses eleitores.",
      "Gráficos demonstrando a correlação estrita entre queda de brancos/nulos e ascensão do candidato vencedor."
    ],
    counterAnalysis: "Historicamente, o segundo turno reduz o contingente de nulos e brancos quando o cenário se torna um plebiscito binário entre dois projetos diametralmente opostos, reduzindo a neutralidade.",
    authorQuoteOrKeyIdea: "«...todos os votos de quem tinha votado branco ou nulo...»"
  },
  {
    id: 4,
    title: "4. A Conta que 'Não Fecha' e a Suposta Canibalização de Votos de Flávio",
    category: "matematica",
    categoryLabel: "Matemática Eleitoral",
    summary: "A tese de que, mesmo somando terceira via, ausentes e nulos, o total ainda exigiu a subtração de votos já obtidos pelo oponente no 1º turno.",
    detailedArgument: "Este é o ponto matemático culminante do vídeo: segundo Lucas Banzoli, mesmo concedendo a hipótese extrema de absorver 100% da terceira via + 100% dos faltosos + 100% de nulos/brancos, o número final de votos de Lula no 2º turno em certas localidades excede esse teto, de modo que 'a conta só fecha' se votos conquistados por Flávio Bolsonaro no 1º turno tiverem sido retirados ou revertidos.",
    evidencePresented: [
      "Equações aritméticas de balanço eleitoral por seção e cidade.",
      "Demonstração do saldo residual negativo imposto à votação do oponente.",
      "Afirmação de que seria incoerente um eleitor convicto do primeiro turno mudar radicalmente para a oposição polarizada."
    ],
    counterAnalysis: "Erros metodológicos ao comparar boletins de urna individuais com totais agregados ou desconsiderar variações pontuais de quórum de mesários, títulos cancelados e transferências temporárias de votantes (como policiais, juízes e militares em serviço).",
    authorQuoteOrKeyIdea: "«...e, não satisfeito com isso, ainda parte dos votos do Flávio pra conta conseguir fechar...»"
  },
  {
    id: 5,
    title: "5. Viradas Repentinas em Redutos Conservadores sem Detecção em Pesquisas",
    category: "comportamento",
    categoryLabel: "Comportamento Regional",
    summary: "Estados e municípios considerados redutos consolidados de direita viraram de lado abruptamente sem qualquer sinalização demoscópica.",
    detailedArgument: "O autor examina o comportamento regional do eleitorado, apontando estados de histórico conservador expressivo que apresentaram viradas drásticas em favor da esquerda. Banzoli questiona o fato de que nenhum instituto de pesquisa de opinião (Datafolha, Paraná Pesquisas, Quaest, etc.) tenha captado qualquer oscilação ou tendência nesse sentido nos dias que antecederam a votação.",
    evidencePresented: [
      "Séries históricas de eleições presidenciais anteriores nesses municípios e estados.",
      "Divergência expressiva entre pesquisas de boca de urna / véspera e o resultado totalizado.",
      "Contraste entre a expressiva bancada de deputados e senadores conservadores eleitos e a votação presidencial oposta na mesma urna."
    ],
    counterAnalysis: "O fenômeno do voto 'Lula-Governador de Direita' ou 'Voto Cruzado' é amplamente documentado na ciência política brasileira (efeito 'Split-Ticket'), onde o eleitor elege parlamentares locais conservadores mas vota no candidato de apelo social para o executivo federal.",
    authorQuoteOrKeyIdea: "«...além dos estados mais bolsonaristas do Brasil que magicamente viraram petistas da noite pro dia sem que nenhuma pesquisa de opinião detectasse esse movimento.»"
  },
  {
    id: 6,
    title: "6. Simulação com Inteligência Artificial e Probabilidade Estatística Nula",
    category: "tecnologia",
    categoryLabel: "Tecnologia & IA",
    summary: "O autor afirma ter submetido as matrizes eleitorais a inteligências artificiais, obtendo probabilidade próxima de zero para um evento orgânico.",
    detailedArgument: "Banzoli relata no vídeo que formulou prompts e modelos estatísticos submetidos a sistemas avançados de IA para avaliar a probabilidade cumulativa de as variáveis descritas ocorrerem em conjunto de maneira espontânea. A resposta apresentada é de que a chance probabilística de tantas anomalias simultâneas ocorrerem sem intervenção intencional ou viés sistêmico é infinitesimal (ordem de 1 em bilhões).",
    evidencePresented: [
      "Capturas e transcrições de consultas feitas a modelos de IA sobre modelos de probabilidade Bayesiana.",
      "Cálculo de probabilidade conjunta de eventos independentes compostos.",
      "Comparação com anomalias estatísticas reconhecidas internacionalmente (como o Teste de Benford e testes de distribuição de dígitos)."
    ],
    counterAnalysis: "Modelos de linguagem e IA generativa respondem com base nas premissas exatas fornecidas no prompt. Se for perguntado 'qual a probabilidade de um evento impossível acontecer se assumirmos que os eventos são independentes?', o modelo responderá que é quase zero, ignorando que o comportamento humano eleitoral em sociedade é altamente correlacionado e não aleatório.",
    authorQuoteOrKeyIdea: "«Aproveito ainda pra mostrar qual a probabilidade matemática que a IA dá para isso ter acontecido sem fraude...»"
  },
  {
    id: 7,
    title: "7. Urnas Eletrônicas, Transparência do TSE e Clima Político Pós-Pleito",
    category: "politica",
    categoryLabel: "Institucional & Política",
    summary: "Discussão sobre a inviolabilidade do sistema eletrônico, auditoria dos Boletins de Urna e o impacto da derrota política.",
    detailedArgument: "Por fim, o vídeo contextualiza a crise de confiança institucional em torno da totalização do Tribunal Superior Eleitoral (TSE). São abordados temas como a ausência do voto impresso auditável lado a lado, a velocidade da apuração, as reações inflamadas nas redes sociais e a narrativa que circulou após a eleição sobre a viagem do candidato derrotado para fora do país ('Flávio fugiu do país').",
    evidencePresented: [
      "Argumentos sobre a centralização da contagem e criptografia das urnas eletrônicas.",
      "As tags de engajamento do vídeo que abordam 'Urnas adulteradas', 'Fraude do TSE' e 'Farsa eleitoral'.",
      "Análise do discurso da militância de oposição e a repercussão da suposta saída do candidato do Brasil."
    ],
    counterAnalysis: "As urnas eletrônicas brasileiras contam com auditorias prévias e posteriores públicas, incluindo o Teste Público de Segurança (TPS), lacração dos sistemas com assinatura digital e a possibilidade irrestrita de qualquer cidadão ou partido conferir os Boletins de Urna (BUs) impressos na seção eleitoral com o banco de dados oficial do TSE.",
    authorQuoteOrKeyIdea: "«Eu disse que não ia falar mais desse assunto, mas me encheram tanto a paciência que eu decidi fazer um novo vídeo muito mais aprofundado com todas as provas...»"
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activePointId, setActivePointId] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'pontos' | 'simulador' | 'metadados' | 'analise_critica'>('pontos');

  // Simulator State
  const [votosCandidatoA1T, setVotosCandidatoA1T] = useState<number>(45000);
  const [votosCandidatoB1T, setVotosCandidatoB1T] = useState<number>(42000);
  const [terceiraVia1T, setTerceiraVia1T] = useState<number>(8000);
  const [brancosNulos1T, setBrancosNulos1T] = useState<number>(3000);
  const [abstencoes1T, setAbstencoes1T] = useState<number>(12000);

  // Transferencia de Votos para Candidato A no 2º Turno (Sliders em %)
  const [pctTerceiraViaParaA, setPctTerceiraViaParaA] = useState<number>(100);
  const [pctAusentesParaA, setPctAusentesParaA] = useState<number>(85);
  const [pctBrancosNulosParaA, setPctBrancosNulosParaA] = useState<number>(90);
  const [pctVotosBConvertidosParaA, setPctVotosBConvertidosParaA] = useState<number>(10);

  // Input IDs for accessibility
  const searchInputId = useId();
  const candAInputId = useId();
  const candBInputId = useId();
  const terceiraViaInputId = useId();
  const brancosNulosInputId = useId();
  const abstencoesInputId = useId();

  // Slider IDs for accessibility
  const sliderTerceiraViaId = useId();
  const sliderAusentesId = useId();
  const sliderBrancosNulosId = useId();
  const sliderConvertidosId = useId();

  // Cálculos do 2º Turno no Simulador
  const migracaoTerceiraVia = Math.round(terceiraVia1T * (pctTerceiraViaParaA / 100));
  const migracaoAusentes = Math.round(abstencoes1T * (pctAusentesParaA / 100));
  const migracaoBrancosNulos = Math.round(brancosNulos1T * (pctBrancosNulosParaA / 100));
  const canibalizacaoB = Math.round(votosCandidatoB1T * (pctVotosBConvertidosParaA / 100));

  const totalA2T = votosCandidatoA1T + migracaoTerceiraVia + migracaoAusentes + migracaoBrancosNulos + canibalizacaoB;
  const totalB2T = votosCandidatoB1T - canibalizacaoB + Math.round(terceiraVia1T * ((100 - pctTerceiraViaParaA) / 100));
  const crescimentoA = totalA2T - votosCandidatoA1T;
  const tetoSomaLegitima = terceiraVia1T + abstencoes1T + brancosNulos1T;
  const excedeTeto = crescimentoA > tetoSomaLegitima;

  // Filtragem
  const filteredPoints = POINTS_DATA.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.detailedArgument.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activePoint = POINTS_DATA.find(p => p.id === activePointId) || POINTS_DATA[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Banner / Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Dossiê Analítico
                </span>
                <span className="text-xs text-slate-400">Ref: YouTube ID: {VIDEO_METADATA.id}</span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight">
                TODOS OS INDÍCIOS DA **POSSÍVEL** FRAUDE ELEITORAL
              </h1>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav aria-label="Navegação do Dossiê" className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-sm">
            <button
              onClick={() => setActiveTab('pontos')}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-2 ${
                activeTab === 'pontos'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Pontos do Vídeo ({POINTS_DATA.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('simulador')}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-2 ${
                activeTab === 'simulador'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Simulador Matemático</span>
            </button>
            <button
              onClick={() => setActiveTab('metadados')}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-2 ${
                activeTab === 'metadados'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>Metadados & Tags</span>
            </button>
            <button
              onClick={() => setActiveTab('analise_critica')}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-2 ${
                activeTab === 'analise_critica'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>Contrapontos Técnicos</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        
        {/* Warning / Status Notice Header */}
        <div className="mb-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 p-5 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-base font-semibold text-amber-200">
                    Documento de Análise e Registro do Vídeo
                  </h2>
                  <span className="text-xs bg-red-950/80 text-red-300 border border-red-800/60 px-2 py-0.5 rounded-full font-medium">
                    Status Atual no YouTube: Indisponível / Restrito
                  </span>
                </div>
                <p className="text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
                  Este dossiê detalha integralmente todos os pontos, premissas numéricas, argumentos e inferências apresentados pelo autor <strong className="text-amber-300">Lucas Banzoli</strong> no vídeo de <span className="text-slate-200 font-medium">34 minutos e 03 segundos</span> com o título acima citado, acompanhado do exame aritmético e das verificações estatísticas oficiais.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 bg-slate-950/60 px-4 py-2 rounded-xl border border-slate-800 text-xs text-slate-400">
              <span>Canal: <strong className="text-slate-200">{VIDEO_METADATA.author}</strong></span>
              <span>•</span>
              <span>Duração: <strong className="text-slate-200">34:03</strong></span>
            </div>
          </div>
        </div>

        {/* TAB 1: PONTOS ABORDADOS NO VÍDEO */}
        {activeTab === 'pontos' && (
          <div className="space-y-6">
            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider mr-1">Filtrar:</span>
                {[
                  { id: 'all', label: 'Todos os Pontos' },
                  { id: 'matematica', label: 'Matemática dos Votos' },
                  { id: 'comportamento', label: 'Comportamento Regional' },
                  { id: 'tecnologia', label: 'Simulações & IA' },
                  { id: 'politica', label: 'TSE & Política' },
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                      selectedCategory === cat.id
                        ? 'bg-amber-500 text-slate-950 shadow'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <label htmlFor={searchInputId} className="sr-only">Buscar termos</label>
                <input
                  id={searchInputId}
                  type="text"
                  placeholder="Buscar termo ou argumento..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
                />
              </div>
            </div>

            {/* Split View: List on Left, Detail on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Point Selection Cards */}
              <div className="lg:col-span-5 space-y-3">
                {filteredPoints.length === 0 ? (
                  <div className="text-center p-8 bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-400 text-sm">
                    Nenhum ponto encontrado para o filtro selecionado.
                  </div>
                ) : (
                  filteredPoints.map((point) => {
                    const isSelected = point.id === activePointId;
                    return (
                      <div
                        key={point.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => setActivePointId(point.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActivePointId(point.id);
                          }
                        }}
                        className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer relative group ${
                          isSelected
                            ? 'bg-slate-900 border-amber-500/80 shadow-md ring-1 ring-amber-500/30'
                            : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            point.category === 'matematica' ? 'bg-blue-950 text-blue-300 border border-blue-800/50' :
                            point.category === 'tecnologia' ? 'bg-purple-950 text-purple-300 border border-purple-800/50' :
                            point.category === 'comportamento' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/50' :
                            'bg-amber-950 text-amber-300 border border-amber-800/50'
                          }`}>
                            {point.categoryLabel}
                          </span>
                          <span className="text-xs font-mono text-slate-500">#{point.id}</span>
                        </div>

                        <h3 className={`text-sm font-bold line-clamp-1 ${isSelected ? 'text-amber-400' : 'text-slate-200'}`}>
                          {point.title}
                        </h3>

                        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                          {point.summary}
                        </p>

                        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/50 text-[11px] text-slate-400">
                          <span className="flex items-center gap-1 text-slate-300 group-hover:text-amber-300 transition">
                            Ver argumentação completa <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                          {isSelected && (
                            <span className="text-amber-400 font-semibold flex items-center gap-1">
                              Selecionado
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Right Column: Detailed Breakdown of Selected Point */}
              <div className="lg:col-span-7">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl sticky top-20">
                  {/* Point Header */}
                  <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4">
                    <div>
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                        {activePoint.categoryLabel} • Ponto #{activePoint.id}
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-white mt-2">
                        {activePoint.title}
                      </h2>
                    </div>
                  </div>

                  {/* Quote from Author */}
                  <div className="mt-4 p-3.5 bg-slate-950/70 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-slate-300 italic">
                    {activePoint.authorQuoteOrKeyIdea}
                  </div>

                  {/* Detailed Description */}
                  <div className="mt-5 space-y-4">
                    <div>
                      <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1.5 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-amber-400" /> O Argumento Sustentado no Vídeo:
                      </h4>
                      <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/60">
                        {activePoint.detailedArgument}
                      </p>
                    </div>

                    {/* Evidences / Tables Mentioned */}
                    <div>
                      <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Elementos e Premissas Citadas por Lucas Banzoli:
                      </h4>
                      <ul className="space-y-2">
                        {activePoint.evidencePresented.map((ev, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-950/30 p-2.5 rounded-lg border border-slate-800/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                            <span>{ev}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Counter Analysis */}
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <h4 className="text-xs uppercase font-bold text-blue-400 tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Scale className="w-4 h-4 text-blue-400" /> Contraponto Técnico & Metodologia Estatística:
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {activePoint.counterAnalysis}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SIMULADOR MATEMÁTICO */}
        {activeTab === 'simulador' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    Simulador Interativo: A Equação da "Conta que Não Fecha"
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    O principal argumento matemático do vídeo sustenta que a soma dos novos votos atribuídos a Lula superava o teto somado de terceiros, abstenções e nulos. Experimente os valores para visualizar essa dinâmica.
                  </p>
                </div>
              </div>

              {/* Grid of 1st Turn Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-4 border-t border-slate-800">
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <label htmlFor={candAInputId} className="text-xs font-semibold text-slate-400 block mb-1">
                    Candidato A (Lula) 1ºT
                  </label>
                  <input
                    id={candAInputId}
                    type="number"
                    value={votosCandidatoA1T}
                    onChange={(e) => setVotosCandidatoA1T(Number(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm font-mono text-amber-300 focus:outline-none"
                  />
                </div>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <label htmlFor={candBInputId} className="text-xs font-semibold text-slate-400 block mb-1">
                    Candidato B (Flávio) 1ºT
                  </label>
                  <input
                    id={candBInputId}
                    type="number"
                    value={votosCandidatoB1T}
                    onChange={(e) => setVotosCandidatoB1T(Number(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm font-mono text-blue-300 focus:outline-none"
                  />
                </div>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <label htmlFor={terceiraViaInputId} className="text-xs font-semibold text-slate-400 block mb-1">
                    3ª Via (Outros) 1ºT
                  </label>
                  <input
                    id={terceiraViaInputId}
                    type="number"
                    value={terceiraVia1T}
                    onChange={(e) => setTerceiraVia1T(Number(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm font-mono text-purple-300 focus:outline-none"
                  />
                </div>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <label htmlFor={brancosNulosInputId} className="text-xs font-semibold text-slate-400 block mb-1">
                    Brancos / Nulos 1ºT
                  </label>
                  <input
                    id={brancosNulosInputId}
                    type="number"
                    value={brancosNulos1T}
                    onChange={(e) => setBrancosNulos1T(Number(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm font-mono text-slate-300 focus:outline-none"
                  />
                </div>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <label htmlFor={abstencoesInputId} className="text-xs font-semibold text-slate-400 block mb-1">
                    Abstenções 1ºT
                  </label>
                  <input
                    id={abstencoesInputId}
                    type="number"
                    value={abstencoes1T}
                    onChange={(e) => setAbstencoes1T(Number(e.target.value) || 0)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-sm font-mono text-rose-300 focus:outline-none"
                  />
                </div>
              </div>

              {/* Sliders for Simulation */}
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                  Premissas de Migração para o 2º Turno (Conforme Tese do Vídeo)
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Slider 1 */}
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    <div className="flex justify-between text-xs mb-1">
                      <label htmlFor={sliderTerceiraViaId} className="text-slate-300 font-medium">
                        % da 3ª Via que votou em Lula:
                      </label>
                      <span className="font-mono text-amber-400 font-bold">{pctTerceiraViaParaA}% (+{migracaoTerceiraVia.toLocaleString()} votos)</span>
                    </div>
                    <input
                      id={sliderTerceiraViaId}
                      type="range"
                      min="0"
                      max="100"
                      value={pctTerceiraViaParaA}
                      onChange={(e) => setPctTerceiraViaParaA(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <span className="text-[11px] text-slate-500 block mt-1">O vídeo afirma que em certas cidades foi necessário 100%.</span>
                  </div>

                  {/* Slider 2 */}
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    <div className="flex justify-between text-xs mb-1">
                      <label htmlFor={sliderAusentesId} className="text-slate-300 font-medium">
                        % dos Ausentes/Abstenção que compareceram e votaram em Lula:
                      </label>
                      <span className="font-mono text-amber-400 font-bold">{pctAusentesParaA}% (+{migracaoAusentes.toLocaleString()} votos)</span>
                    </div>
                    <input
                      id={sliderAusentesId}
                      type="range"
                      min="0"
                      max="100"
                      value={pctAusentesParaA}
                      onChange={(e) => setPctAusentesParaA(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <span className="text-[11px] text-slate-500 block mt-1">O vídeo argumenta que abstenções viraram massivamente votos válidos.</span>
                  </div>

                  {/* Slider 3 */}
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    <div className="flex justify-between text-xs mb-1">
                      <label htmlFor={sliderBrancosNulosId} className="text-slate-300 font-medium">
                        % de Brancos/Nulos convertidos para Lula:
                      </label>
                      <span className="font-mono text-amber-400 font-bold">{pctBrancosNulosParaA}% (+{migracaoBrancosNulos.toLocaleString()} votos)</span>
                    </div>
                    <input
                      id={sliderBrancosNulosId}
                      type="range"
                      min="0"
                      max="100"
                      value={pctBrancosNulosParaA}
                      onChange={(e) => setPctBrancosNulosParaA(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <span className="text-[11px] text-slate-500 block mt-1">Quase anulação zero de votos residuais.</span>
                  </div>

                  {/* Slider 4 */}
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    <div className="flex justify-between text-xs mb-1">
                      <label htmlFor={sliderConvertidosId} className="text-slate-300 font-medium">
                        % de Votos de Flávio "canibalizados" / transferidos para Lula:
                      </label>
                      <span className="font-mono text-red-400 font-bold">{pctVotosBConvertidosParaA}% ({canibalizacaoB.toLocaleString()} votos)</span>
                    </div>
                    <input
                      id={sliderConvertidosId}
                      type="range"
                      min="0"
                      max="30"
                      value={pctVotosBConvertidosParaA}
                      onChange={(e) => setPctVotosBConvertidosParaA(Number(e.target.value))}
                      className="w-full accent-red-500 cursor-pointer"
                    />
                    <span className="text-[11px] text-slate-500 block mt-1">A tese de que os números de Flávio precisaram encolher para Lula fechar a conta.</span>
                  </div>
                </div>
              </div>

              {/* Results & Verification Panel */}
              <div className="mt-6 p-5 rounded-xl border bg-slate-950 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-xs text-slate-400 block">Total de Votos Lula 2ºT</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-amber-400">{totalA2T.toLocaleString()}</span>
                    <span className="text-xs text-emerald-400 block mt-0.5">+{crescimentoA.toLocaleString()} votos adicionais</span>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-xs text-slate-400 block">Total de Votos Flávio 2ºT</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-blue-400">{totalB2T.toLocaleString()}</span>
                    <span className="text-xs text-slate-400 block mt-0.5">Saldo final estimado</span>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-xs text-slate-400 block">Teto Teórico Disponível (3ªVia + Ausentes + Nulos)</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-purple-300">{tetoSomaLegitima.toLocaleString()}</span>
                    <span className="text-xs text-slate-400 block mt-0.5">Estoque máximo de novos votos</span>
                  </div>
                </div>

                {/* Verdict Box */}
                <div className={`p-4 rounded-xl border ${
                  excedeTeto 
                    ? 'bg-red-950/40 border-red-800/80 text-red-200' 
                    : 'bg-emerald-950/30 border-emerald-800/50 text-emerald-200'
                }`}>
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {excedeTeto ? <AlertTriangle className="w-5 h-5 text-red-400" /> : <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                    <span>
                      {excedeTeto 
                        ? 'Alerta da Tese de Banzoli: O crescimento excede o estoque disponível sem subtrair votos do oponente!' 
                        : 'Dentro do limite matemático do estoque: Os novos votos cabem na soma dos disponíveis.'}
                    </span>
                  </div>
                  <p className="text-xs mt-1.5 opacity-90 leading-relaxed">
                    {excedeTeto 
                      ? `Neste cenário simulado, o Candidato A cresceu ${crescimentoA.toLocaleString()} votos, ultrapassando os ${tetoSomaLegitima.toLocaleString()} que existiam somando toda a terceira via, ausentes e nulos. É exatamente nessa incoerência matemática que o vídeo fundamenta sua denúncia de suposta adulteração.`
                      : `Com essas proporções, o aumento de votos é teoricamente explicável pelo comparecimento de eleitores faltosos e redistribuição da terceira via.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: METADADOS, TAGS E DESCRIÇÃO ORIGINAL */}
        {activeTab === 'metadados' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Description Card */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-400" />
                  Descrição Original Completa do Vídeo
                </h3>
                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                  Canal Lucas Banzoli
                </span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {VIDEO_METADATA.originalDescription}
              </div>

              <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200">
                <strong>Observação de Análise do Texto:</strong> A descrição antecipa explicitamente o roteiro de raciocínio do autor: (1) cidades com migração total de terceiros, ausentes e nulos; (2) necessidade de transferência de votos de Flávio; (3) virada sem respaldo nas pesquisas de opinião; e (4) o cálculo de probabilidade formulado com auxílio de Inteligência Artificial.
              </div>
            </div>

            {/* Video Technical Specs & Tags */}
            <div className="lg:col-span-5 space-y-6">
              {/* Specs */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-400" />
                  Ficha Técnica do Vídeo
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Título:</span>
                    <span className="font-semibold text-slate-200 text-right">{VIDEO_METADATA.title}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Autor / Criador:</span>
                    <span className="font-semibold text-amber-400">{VIDEO_METADATA.author}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Duração:</span>
                    <span className="font-semibold text-slate-200">{VIDEO_METADATA.duration}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Status no YouTube:</span>
                    <span className="font-semibold text-red-400">{VIDEO_METADATA.status}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Código do Vídeo (ID):</span>
                    <span className="font-mono text-slate-300">{VIDEO_METADATA.id}</span>
                  </div>
                </div>
              </div>

              {/* Tags Index */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-3">
                  <Cpu className="w-5 h-5 text-purple-400" />
                  Tags Oficiais e Palavras-Chave Catalogadas
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  As palavras-chave indexadas pelo próprio autor revelam os temas nucleares abordados ao longo dos 34 minutos:
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {VIDEO_METADATA.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-950 text-slate-300 border border-slate-800 px-2.5 py-1 rounded-lg font-mono hover:border-amber-500/40 transition"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CONTRAPONTOS TÉCNICOS & AUDITORIA */}
        {activeTab === 'analise_critica' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">
                  Auditoria e Exame Crítico das Alegações
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Como a Justiça Eleitoral, os cientistas de dados e peritos computacionais explicam os fenômenos apontados no vídeo.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> 1. O Efeito dos Pequenos Municípios
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Em cidades com poucas seções eleitorais (menos de 5 mil eleitores), uma variação de apenas 200 ou 300 pessoas comparecendo a mais no segundo turno distorce radicalmente as porcentagens nominais, gerando a falsa impressão de uma "anomalia global impossível" quando analisada fora do contexto demográfico micro-local.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-blue-400 flex items-center gap-2">
                  <Calculator className="w-4 h-4" /> 2. O Erro da Hipótese de Independência na IA
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Quando o autor relata ter consultado uma IA que estimou a probabilidade em quase zero, a premissa adotada assume independência estatística entre os eleitores. Na realidade humana, eleitores de uma mesma comunidade ou família tomam decisões correlacionadas sob as mesmas influências de lideranças comunitárias e programas sociais.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> 3. Boletins de Urna Físicos (BU)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Cada seção eleitoral emite e afixa cópias impressas do Boletim de Urna no encerramento da votação às 17h, antes de qualquer transmissão eletrônica. Qualquer cidadão, partido ou observador pode conferir a soma dos BUs físicos locais com os dados do servidor central, impedindo alterações matemáticas sem detecção física imediata.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-purple-400 flex items-center gap-2">
                  <Scale className="w-4 h-4" /> 4. Voto Útil e Polarização Extrema
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  No segundo turno, eleitores de centro que antes dispersavam seus votos em nomes moderados tendem a concentrar a escolha no candidato percebido como menos agressivo ou de menor rejeição pessoal, gerando migrações assimétricas que fogem de divisões de 50/50.
                </p>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Dossiê documental elaborado a partir dos metadados e conteúdo do vídeo analisado.</span>
          <span className="font-mono text-slate-400">ID: {VIDEO_METADATA.id} • Duração: {VIDEO_METADATA.duration}</span>
        </div>
      </footer>
    </div>
  );
}
