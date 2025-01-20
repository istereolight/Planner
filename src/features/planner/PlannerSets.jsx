import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { imageCards } from "../../lib/imageCards"
import { ItemCard } from "../../components/ItemCard"

export const PlannerSets = () => {
  return (
    <div className='block w-[600px]'>
      <Tabs defaultValue="1" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="1">Столы</TabsTrigger>
          <TabsTrigger value="2">Стулья</TabsTrigger>
          <TabsTrigger value="3">Перегородки</TabsTrigger>
          <TabsTrigger value="4">Места</TabsTrigger>
          <TabsTrigger value="5">Прочее</TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <div className='flex items-center'>
            {
              imageCards.map((card, index) => {
                return (
                  <div key={index} className='flex-col items-center w-36'>
                    <div className='pl-3'>
                      <ItemCard key={card.id} card={card}/>
                    </div>
                    
                    <span>{card.title}</span>
                  </div>
                )
              })
            }
          </div>
        </TabsContent>
        <TabsContent value="2">Добавить новые карточки сюда</TabsContent>
      </Tabs>
    </div>
  )
}